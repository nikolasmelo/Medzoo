# MEDZOO — ARQUITETURA DA DRA. MILLENA (TUTORA DE IA GENERATIVA REAL)

## 1. Visão Geral

A **Dra. Millena** é a tutora pedagógica oficial do MedZoo. Diferente de chatbots genéricos ou assistentes estáticos baseados apenas em regex, a Dra. Millena opera como uma **IA Generativa Real** ancorada em rigor científico veterinário, pensamento socrático e **Tool Calling determinístico**.

Sua missão é responder à pergunta: *“Você entende o raciocínio clínico por trás desta conduta?”*, complementando o Modo Clínico sem jamais violar as regras pedagógicas do jogo.

---

## 2. Diagrama Arquitetural

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Cliente Web (Vite + React)                      │
│                                                                        │
│   [AITutorDrawer] ◄────► [tutorService]                                │
│          │                      │                                      │
│          │                      ├── Se online & remote ativo           │
│          │                      │   └── supabase.functions.invoke()    │
│          │                      │                                      │
│          │                      └── Fallback offline gracioso          │
│          │                          └── [LocalKnowledgeTutor]          │
└──────────┼─────────────────────────────────────────────────────────────┘
           │
           │ HTTPS POST (Edge Function Invoke)
           ▼
┌────────────────────────────────────────────────────────────────────────┐
│             Supabase Edge Function: 'tutor-ai' (Deno)                  │
│                                                                        │
│   1. Recebe Payload: { action, context, question, history, level }     │
│   2. RAG Semântico/Léxico sobre Chunks Homologados do MedZoo:          │
│      - Meloxicam 0,2% e 2,0%                                           │
│      - Enrofloxacina 5,0%                                              │
│      - Sulfato de Atropina 1,0%                                        │
│      - Fórmula Canônica V = (P × D) ÷ C                                │
│      - Cadeias Causais de Toxicidade / Subdose                         │
│   3. Constrói System Prompt da Dra. Millena com Chunks Injetados       │
│   4. OpenAI Chat Completions API com Tools:                            │
│      ┌──────────────────────────────────────────────────────────────┐  │
│      │ Ferramentas Determinísticas de Cálculo Farmacológico:        │  │
│      │  • calculateVolume({ weight, dose, conc })                  │  │
│      │  • calculateDose({ weight, volume, conc })                   │  │
│      │  • calculateDeviation({ administered, target })              │  │
│      │  • getDrugInformation({ drugNameOrId })                     │  │
│      └──────────────────────────────────────────────────────────────┘  │
│   5. Loop de Resolução de Tool Calling (máx 2 turnos)                  │
│   6. Retorno Estruturado:                                              │
│      { provider: 'openai', message, toolCallsExecuted, citedChunks }   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Segurança Rigorosa de Credenciais (Zero Client Leak)

1. **Variáveis de Ambiente:** A chave `OPENAI_API_KEY` reside exclusivamente nos segredos da Supabase Edge Function (`Deno.env.get('OPENAI_API_KEY')`).
2. **Nenhuma chave no Frontend:** Nenhuma chave com acesso a modelos de IA externa é embutida no bundle de produção do Vite.
3. **Controle de Custos e Modelos:** O modelo padrão é configurado como `gpt-4o-mini` (alta velocidade, custo mínimo e excelente capacidade de seguir instruções de tool calling).

---

## 4. Tool Calling Determinístico para Cálculos

Modelos de linguagem estatísticos (LLMs) são naturalmente propensos a alucinações aritméticas ao multiplicar e dividir decimais em mililitros. Para garantir segurança pedagógica absoluta, a Dra. Millena é instruída a delegar qualquer cálculo para as seguintes ferramentas:

### 1. `calculateVolume`
- **Fórmula:**
  $$V = \frac{\text{Peso} \times \text{Dose}}{\text{Concentração}}$$
- **Retorno:** Volume milimétrico exato, massa total de princípio ativo e equação formatada.

### 2. `calculateDose`
- **Fórmula:**
  $$D = \frac{\text{Volume} \times \text{Concentração}}{\text{Peso}}$$
- **Uso:** Validação de doses administradas acidentalmente ou conferência de prescrições.

### 3. `calculateDeviation`
- **Fórmula:**
  $$\text{Desvio \%} = \frac{V_{\text{administrado}} - V_{\text{alvo}}}{V_{\text{alvo}}} \times 100$$
- **Classificação:**
  - $\pm 5\%$: Margem segura operacional.
  - $< -5\%$: Subdose (risco de falha terapêutica e indução de resistência bacteriana).
  - $> +5\%$: Sobredose (risco de necrose papilar renal, toxicidade e colapso).

### 4. `getDrugInformation`
- **Retorno:** Ficha canônica oficial homologada no MedZoo (classes, dosagens em animais silvestres, contraindicações e cadeia causal de toxicidade).

---

## 5. RAG Estruturado em Chunks Canônicos

Para manter o foco no currículo veterinário do MedZoo e evitar que a IA invente dados não ensinados na aula, os chunks são indexados e injetados de forma contextual no `System Prompt`:

- **Chunk 1:** Fórmula universal de volume e variáveis fundamentais.
- **Chunk 2:** Regra de ouro da conversão de porcentagem ($\% \times 10 = \text{mg/mL}$).
- **Chunk 3:** Janela terapêutica e particularidades de silvestres (aves, répteis e mamíferos).
- **Chunk 4:** Fichas farmacológicas dos fármacos em uso no módulo ativo.

---

## 6. Princípios Pedagógicos Intocáveis

1. **Princípio 7 (Diálogo não altera Mastery):**
   Conversar com a Dra. Millena, pedir pistas ou debater casos clínicos **nunca** incrementa o `masteryScore` ou o progresso da carreira. Somente avaliações e exercícios avaliados pelo motor determinístico alteram proficiência.
2. **Causalidade Explícita:**
   Todas as explicações seguem o fluxo:
   $$\text{Causa} \longrightarrow \text{Mecanismo} \longrightarrow \text{Efeito} \longrightarrow \text{Consequência Clínica}$$
3. **Independência e Fallback Offline:**
   Se a conexão falhar ou a Edge Function estiver fora do ar, o `LocalKnowledgeTutor` assume instantaneamente, fornecendo respostas baseadas no banco de fatos local sem interromper os estudos.
