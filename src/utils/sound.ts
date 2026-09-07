type float = number;

class SoundEngine {
    private ctx: AudioContext | null = null;
    private enabled: boolean = true;

    private getContext(): AudioContext {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return this.ctx;
    }

    initialize(): void {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    playClick(): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.01);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.04);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.04);
    }

    playDiscovery(): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        
        osc1.type = 'sine';
        osc2.type = 'triangle';
        
        osc1.frequency.setValueAtTime(1200, ctx.currentTime);
        osc1.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.2);
        
        osc2.frequency.setValueAtTime(1200, ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.2);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
        
        osc1.start(ctx.currentTime);
        osc1.stop(ctx.currentTime + 0.2);
        osc2.start(ctx.currentTime);
        osc2.stop(ctx.currentTime + 0.2);
    }

    playSuccess(): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        
        frequencies.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            const startTime = ctx.currentTime + index * 0.1;
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.1, startTime + 0.05);
            gain.gain.linearRampToValueAtTime(0, startTime + 0.2);
            
            osc.start(startTime);
            osc.stop(startTime + 0.2);
        });
    }

    playError(): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.3);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    }

    playTone(freq: float, duration: float, volume: float = 0.1): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    }

    private asystoleOsc: OscillatorNode | null = null;
    private asystoleGain: GainNode | null = null;

    playHeartbeat(hr: number): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        // Stop any playing asystole
        this.stopAsystole();
        
        const playBeat = (freq: number, startTime: number) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.3, startTime + 0.02);
            gain.gain.linearRampToValueAtTime(0, startTime + 0.15);
            
            osc.start(startTime);
            osc.stop(startTime + 0.15);
        };
        
        // Pitch modulation based on HR
        const isTachy = hr > 160;
        const isBrady = hr < 40;
        
        const baseFreq = isTachy ? 80 : isBrady ? 50 : 65;
        const secondaryFreq = isTachy ? 60 : isBrady ? 35 : 45;
        
        playBeat(baseFreq, ctx.currentTime);
        playBeat(secondaryFreq, ctx.currentTime + (isTachy ? 0.1 : 0.2));
    }

    playAsystole(): void {
        if (!this.enabled || this.asystoleOsc) return;
        const ctx = this.getContext();
        
        this.asystoleOsc = ctx.createOscillator();
        this.asystoleGain = ctx.createGain();
        
        this.asystoleOsc.connect(this.asystoleGain);
        this.asystoleGain.connect(ctx.destination);
        
        this.asystoleOsc.type = 'sine';
        this.asystoleOsc.frequency.value = 400; // Continuous alarm tone
        
        this.asystoleGain.gain.setValueAtTime(0, ctx.currentTime);
        this.asystoleGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.1);
        
        this.asystoleOsc.start();
    }

    stopAsystole(): void {
        if (this.asystoleOsc && this.asystoleGain && this.ctx) {
            this.asystoleGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
            this.asystoleOsc.stop(this.ctx.currentTime + 0.1);
            this.asystoleOsc = null;
            this.asystoleGain = null;
        }
    }

    playXrayCharge(): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 1.0);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.5);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.0);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.0);
    }

    playBoneDrillFriction(pressure: number, corticalResistance: number): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 180;
        
        const shaper = ctx.createWaveShaper();
        shaper.oversample = '4x';
        
        let k = pressure * corticalResistance;
        k = Math.max(0, Math.min(50, k));
        
        const n_samples = 44100;
        const curve = new Float32Array(n_samples);
        for (let i = 0; i < n_samples; ++i) {
            const x = (i * 2) / n_samples - 1;
            curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
        }
        shaper.curve = curve;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 2000;
        filter.Q.value = 5;
        
        const gain = ctx.createGain();
        const volume = 0.12 * pressure;
        
        osc.connect(shaper);
        shaper.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        const duration = 0.8;
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    }

    playDopplerFlow(probeVelocity: number, arterialVelocity: number): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        const carrier = ctx.createOscillator();
        carrier.type = 'sine';
        const baseFreq = 2000;
        
        const dopplerFreq = baseFreq * (343 + probeVelocity) / (343 - arterialVelocity);
        carrier.frequency.value = dopplerFreq;
        
        const modulator = ctx.createOscillator();
        modulator.type = 'sine';
        modulator.frequency.value = arterialVelocity * 8;
        
        const modGain = ctx.createGain();
        modGain.gain.value = 200;
        
        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        
        const convolver = ctx.createConvolver();
        const rate = ctx.sampleRate;
        const length = rate * 2;
        const buffer = ctx.createBuffer(2, length, rate);
        
        for (let channel = 0; channel < 2; channel++) {
            const data = buffer.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                const noise = Math.random() * 2 - 1;
                data[i] = noise * Math.exp(-3 * (i / rate));
            }
        }
        convolver.buffer = buffer;
        
        const outGain = ctx.createGain();
        outGain.gain.value = 0.08;
        
        carrier.connect(convolver);
        convolver.connect(outGain);
        outGain.connect(ctx.destination);
        
        const duration = 1.5;
        carrier.start(ctx.currentTime);
        carrier.stop(ctx.currentTime + duration);
        modulator.start(ctx.currentTime);
        modulator.stop(ctx.currentTime + duration);
    }

    playResinExotherm(temperature: number): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        const baseFreq = 100 + (temperature - 25) * 15;
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = baseFreq;
        
        let targetNode: AudioNode = osc;
        
        if (temperature > 41) {
            const shaper = ctx.createWaveShaper();
            const k = 20;
            const n_samples = 44100;
            const curve = new Float32Array(n_samples);
            for (let i = 0; i < n_samples; ++i) {
                const x = (i * 2) / n_samples - 1;
                curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
            }
            shaper.curve = curve;
            osc.connect(shaper);
            targetNode = shaper;
        }
        
        const gain = ctx.createGain();
        targetNode.connect(gain);
        gain.connect(ctx.destination);
        
        const duration = 0.6;
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.5);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + duration);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    }

    playAnesthesiaMonitor(heartRate: number, isStable: boolean): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        const freq = isStable ? 880 : 440;
        const duration = 0.06;
        const isAlarm = heartRate < 30 || heartRate > 60;
        
        const playBeep = (startTime: number) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
            gain.gain.linearRampToValueAtTime(0, startTime + duration);
            
            osc.start(startTime);
            osc.stop(startTime + duration);
        };
        
        playBeep(ctx.currentTime);
        if (isAlarm) {
            playBeep(ctx.currentTime + 0.1);
        }
    }

    playSurgicalIncision(depth: number): void {
        if (!this.enabled) return;
        const ctx = this.getContext();
        
        const duration = 0.15;
        const rate = ctx.sampleRate;
        const length = rate * 0.1;
        const buffer = ctx.createBuffer(1, length, rate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < length; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1000 + depth * 500;
        
        const gain = ctx.createGain();
        gain.gain.value = 0.05 + depth * 0.08;
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        source.start(ctx.currentTime);
        
        gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime + 0.1);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
        source.stop(ctx.currentTime + duration);
    }

    stopAllSounds(): void {
        if (this.ctx) {
            this.stopAsystole();
            this.ctx.close().then(() => {
                this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            });
        }
    }
}

export const soundManager = new SoundEngine();
