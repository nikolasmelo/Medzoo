import { supabase } from './supabase';
import type { CareerState } from '../types';

export const defaultCareerState: CareerState = {
  money: 1200,
  reliability: 85,
  shiftMinutes: 0,
  xp: 0,
  rank: 'Estagiário',
  completedCaseIds: [],
  unlockedUpgrades: [],
};

export async function fetchCareer(userId: string): Promise<CareerState> {
  try {
    const { data, error } = await supabase
      .from('career_progress')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching career_progress:', error);
    }

    if (data) {
      return {
        money: typeof data.money === 'number' ? data.money : defaultCareerState.money,
        reliability: typeof data.reliability === 'number' ? data.reliability : defaultCareerState.reliability,
        shiftMinutes: typeof data.shift_minutes === 'number'
          ? data.shift_minutes
          : (typeof data.shiftMinutes === 'number' ? data.shiftMinutes : defaultCareerState.shiftMinutes),
        xp: typeof data.xp === 'number' ? data.xp : defaultCareerState.xp,
        rank: data.rank || defaultCareerState.rank,
        completedCaseIds: Array.isArray(data.completed_case_ids)
          ? data.completed_case_ids
          : (Array.isArray(data.completedCaseIds) ? data.completedCaseIds : defaultCareerState.completedCaseIds),
        unlockedUpgrades: Array.isArray(data.unlocked_upgrades)
          ? data.unlocked_upgrades
          : (Array.isArray(data.unlockedUpgrades) ? data.unlockedUpgrades : []),
      };
    }

    // Se o jogador não existir no banco, faz o insert com os valores iniciais
    const initialRow = {
      user_id: userId,
      money: defaultCareerState.money,
      reliability: defaultCareerState.reliability,
      shift_minutes: defaultCareerState.shiftMinutes,
      xp: defaultCareerState.xp,
      rank: defaultCareerState.rank,
      completed_case_ids: defaultCareerState.completedCaseIds,
    };

    const { data: insertedData, error: insertError } = await supabase
      .from('career_progress')
      .insert(initialRow)
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting initial career progress:', insertError);
      return defaultCareerState;
    }

    return {
      money: insertedData.money ?? defaultCareerState.money,
      reliability: insertedData.reliability ?? defaultCareerState.reliability,
      shiftMinutes: insertedData.shift_minutes ?? defaultCareerState.shiftMinutes,
      xp: insertedData.xp ?? defaultCareerState.xp,
      rank: insertedData.rank ?? defaultCareerState.rank,
      completedCaseIds: insertedData.completed_case_ids ?? defaultCareerState.completedCaseIds,
      unlockedUpgrades: insertedData.unlocked_upgrades ?? [],
    };
  } catch (err) {
    console.error('Unexpected error in fetchCareer:', err);
    return defaultCareerState;
  }
}

export async function saveCareer(userId: string, state: CareerState): Promise<void> {
  try {
    const basePayload: Record<string, any> = {
      user_id: userId,
      money: state.money,
      reliability: state.reliability,
      shift_minutes: state.shiftMinutes,
      xp: state.xp,
      rank: state.rank,
      completed_case_ids: state.completedCaseIds,
      updated_at: new Date().toISOString(),
    };

    const payloadWithUpgrades = {
      ...basePayload,
      unlocked_upgrades: state.unlockedUpgrades || [],
    };

    const { error } = await supabase
      .from('career_progress')
      .upsert(payloadWithUpgrades, { onConflict: 'user_id' });

    if (error) {
      // Fallback gracioso se a coluna unlocked_upgrades ainda não existir no schema remoto
      if (error.message && error.message.includes('unlocked_upgrades')) {
        await supabase
          .from('career_progress')
          .upsert(basePayload, { onConflict: 'user_id' });
      } else {
        console.error('Error saving career progress:', error);
      }
    }
  } catch (err) {
    console.error('Unexpected error in saveCareer:', err);
  }
}
