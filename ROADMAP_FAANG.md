# 🏆 Roadmap FAANG/Tier-1 — Data Engineer Competitivo

> **Complemento a** `ROADMAP_DATA_ENGINEER.md` y `ROADMAP_SEMANAL.md`
> **Objetivo:** Ser candidato competitivo para **Meta, Amazon/AWS, Google, Microsoft, Apple, Netflix, IBM, Databricks, Stripe, Airbnb, Uber, LinkedIn**.
> **Realidad:** Las certs por sí solas NO te llevan a FAANG. Se necesita: **DSA + System Design + CS fundamentals + proyectos de impacto + comunicación en inglés + behavioral**.

---

## ⚠️ Reality Check antes de empezar

### Lo que FAANG/Tier-1 realmente evalúa para Data Engineer

| Área | Peso aprox. | Detalle |
|------|-------------|---------|
| **Coding (DSA)** | 30-40% | LeetCode Medium/Hard, 2-3 rondas. Python en pizarra. |
| **SQL avanzado** | 15-20% | Window functions, optimización, edge cases. |
| **System Design / Data Modeling** | 25-30% | Diseñar pipelines a escala (PB de datos, millones de eventos/s). |
| **Behavioral / Leadership** | 15-20% | Meta y Amazon especialmente. STAR + Leadership Principles. |
| **Domain knowledge** | 10% | Spark internals, Kafka, distributed systems trade-offs. |

### Lo que NO basta
- ❌ Saber usar AWS Glue/Athena (lo aprende cualquiera en 1 semana).
- ❌ Tener certs si no sabes resolver LeetCode Medium.
- ❌ Hacer tutoriales sin proyectos originales con escala real.
- ❌ Sólo español: el inglés técnico fluido es **no negociable** para Meta/Google/Netflix.

### Ajustes al plan original
- **Dedicación recomendada:** subir a **20-25 hrs/semana** (vs 10-15 original). Con 10-15 hrs/sem es posible pero tomará ~3 años en lugar de 2.
- **Ratio de tiempo:** 40% roadmap original + 60% en los **6 tracks paralelos** de abajo.
- **Cultivar el inglés desde semana 1.**

---

## 📚 6 Tracks Paralelos (todo el roadmap)

Estos tracks corren **simultáneamente** al roadmap principal, no después. Distribución semanal sugerida (sobre ~20 hrs/sem):

| Track | Hrs/semana | % |
|-------|------------|---|
| Track 0 — Roadmap principal (Python/SQL/AWS/DBX) | 10 | 50% |
| Track A — DSA/LeetCode | 4 | 20% |
| Track B — System Design | 2 | 10% |
| Track C — CS Fundamentals | 2 | 10% |
| Track D — Inglés técnico | 1 | 5% |
| Track E — Open Source / Comunidad | 1 | 5% |

---

## 🔠 Track A · DSA + LeetCode (TODO el roadmap)

**Meta:** Resolver **600+ problemas LeetCode** (250 Easy, 300 Medium, 50 Hard) y poder hacer Medium en 25-30 min.

### Distribución por fase

| Fase | Semanas | Foco | Problemas/semana |
|------|---------|------|------------------|
| Inicial | 1-26 (Año 1 H1) | Easy, fundamentos | 5 problemas/sem |
| Build-up | 27-52 (Año 1 H2) | Easy→Medium, patrones | 7 problemas/sem |
| Sólido | 53-78 (Año 2 H1) | Medium, blind 75 | 10 problemas/sem |
| Pre-FAANG | 79-104 (Año 2 H2) | Medium/Hard, mock interviews | 12-15 problemas/sem |

### Patrones esenciales (orden de aprendizaje)
1. **Arrays & Hashing** (Two Sum, Group Anagrams)
2. **Two Pointers** (3Sum, Container With Most Water)
3. **Sliding Window** (Longest Substring Without Repeating)
4. **Stack & Queue** (Valid Parentheses, Daily Temperatures)
5. **Binary Search** (Search in Rotated Array)
6. **Linked List** (Reverse, Merge K Sorted Lists)
7. **Trees & BST** (Inorder, LCA, Serialize Tree)
8. **Graphs & BFS/DFS** (Number of Islands, Course Schedule)
9. **Heap / Priority Queue** (Top K Elements, Median from Stream)
10. **Dynamic Programming** (Coin Change, LIS, Edit Distance)
11. **Backtracking** (Permutations, N-Queens)
12. **Greedy & Intervals** (Meeting Rooms, Jump Game)
13. **Bit Manipulation** (Single Number, Power of Two)

### Recursos DSA
- 📘 **Libro:** *Cracking the Coding Interview* — Gayle McDowell (la biblia)
- 📘 **Libro:** *Elements of Programming Interviews in Python* — Aziz et al.
- 🆓 **NeetCode 150 / NeetCode 250** — [neetcode.io](https://neetcode.io) (IMPRESCINDIBLE, gratis con videos)
- 🆓 **Blind 75** — lista curada de 75 problemas esenciales
- 🆓 **LeetCode Patterns** — [seanprashad.com/leetcode-patterns](https://seanprashad.com/leetcode-patterns/)
- 💰 **AlgoExpert** ($99/año) — alternativa premium con explicaciones video
- 🎓 **Curso Princeton:** [Algorithms Part I & II - Coursera](https://www.coursera.org/learn/algorithms-part1) (gratis, audit mode)

### Rutina semanal sugerida
- Lun/Mié/Vie: 1 problema nuevo Medium (~45 min)
- Mar/Jue: 1 problema review (re-hacer uno que falló hace 2 semanas)
- Sáb: contest virtual LeetCode (1.5 hrs)
- Dom: 1 problema Hard + review patrones

### Checkpoints DSA
- Semana 26: 100 problemas resueltos
- Semana 52: 250 problemas resueltos
- Semana 78: 450 problemas resueltos
- Semana 100: 600+ problemas, Medium en ≤30 min consistente

---

## 🏗 Track B · System Design (desde semana 13)

**Meta:** Diseñar pipelines de datos a escala (PB/día, millones de eventos/segundo) y defenderlos en pizarra/Excalidraw en 45 min.

### Roadmap System Design

**Fase 1 (semanas 13-39): Fundamentos**
- Latencia vs throughput, percentiles (p50, p99)
- CAP theorem, consistency models (strong, eventual, causal)
- Sharding, replication, partitioning
- Caching (Redis, CDN), load balancers
- Message queues vs pub/sub

**Fase 2 (semanas 40-78): Data-Intensive Systems**
- Batch vs streaming trade-offs
- Lambda vs Kappa architecture
- Data formats: row vs columnar (Parquet, ORC)
- Storage engines: LSM-tree (Cassandra) vs B-tree (Postgres)
- Distributed consensus: Raft, Paxos (overview)
- Spark internals: shuffle, partitioning, skew
- Kafka internals: replication, ISR, exactly-once

**Fase 3 (semanas 79-104): Interview-ready**
- Practicar 20+ diseños de pipelines comunes:
  - Real-time analytics (Twitter/X timeline)
  - Recommendation engine pipeline (Netflix)
  - Ad click tracking (Google Ads)
  - Fraud detection real-time (Stripe)
  - IoT telemetry pipeline (Tesla)
  - News feed (Facebook)
  - Search indexing (Google)
  - Logging/monitoring pipeline (Datadog)
  - A/B testing pipeline
  - Geo-distributed data replication

### Recursos System Design
- 📘 **LIBRO BIBLIA:** *Designing Data-Intensive Applications* — Martin Kleppmann (LEER 2x en el roadmap)
- 📘 *System Design Interview Vol 1 & 2* — Alex Xu
- 🆓 [**ByteByteGo**](https://bytebytego.com/) — newsletter + videos cortos
- 🆓 [**System Design Primer**](https://github.com/donnemartin/system-design-primer) — GitHub repo (250k+ stars)
- 🆓 [**The Data Engineering Cookbook**](https://github.com/andkret/Cookbook) — Andreas Kretz
- 📺 [**Jordan has no life**](https://www.youtube.com/@jordanhasnolife5163) — DDIA explained, system design
- 📺 [**Gaurav Sen**](https://www.youtube.com/@gkcs) — System design clásico
- 🎓 [**MIT 6.824 Distributed Systems**](https://pdos.csail.mit.edu/6.824/) — labs en Go, OPCIONAL pero diferenciador brutal

---

## 🖥 Track C · CS Fundamentals (semanas 1-78)

Los FAANG asumen que sabes esto. Si vienes de no-CS, **cierra el gap aquí**.

### Módulos
1. **Sistemas Operativos (semanas 14-26):**
   - Procesos, threads, concurrencia, locks, deadlocks
   - Memory management, paging, virtual memory
   - Scheduling, I/O, file systems
   - Recurso: [OSTEP - free book](https://pages.cs.wisc.edu/~remzi/OSTEP/)

2. **Networking (semanas 27-39):**
   - OSI/TCP-IP, HTTP/HTTPS, DNS, TLS
   - TCP vs UDP, sockets, REST vs gRPC vs GraphQL
   - WebSockets, long-polling, SSE
   - Recurso: *Computer Networking: A Top-Down Approach* — Kurose & Ross

3. **Databases internals (semanas 40-52):**
   - B-tree vs LSM-tree, WAL, MVCC
   - Query planners, query optimization
   - Recurso: *Database Internals* — Alex Petrov

4. **Distributed Systems (semanas 53-78):**
   - Consensus (Raft, Paxos), leader election
   - Replication, partition tolerance, vector clocks
   - Recurso: MIT 6.824 + DDIA caps 5-11

5. **Concurrencia + paralelismo (transversal):**
   - GIL en Python, multiprocessing vs threading
   - Async/await, event loops
   - Spark execution model

### Mini-proyectos CS (1 por módulo)
- Mini-shell en Python (OS)
- HTTP server desde cero con sockets (Networking)
- Mini key-value store con WAL (DB internals)
- Mini Raft leader election (Distributed) — challenge

---

## 🗣 Track D · Inglés técnico (todo el roadmap)

**Meta:** B2-C1 técnico hablado al final del año 2. **Sin esto, Meta/Google/Netflix está cerrado.**

### Plan
- **Semanas 1-26 (B1→B2):**
  - Duolingo / Babbel 15 min/día
  - Consumir TODOS los cursos en inglés (no español)
  - Cambiar OS, móvil, Netflix a inglés
- **Semanas 27-78 (B2):**
  - 1 podcast técnico/semana en inglés (Lex Fridman, Data Engineering Podcast)
  - Escribir READMEs en inglés
  - Subscripción a [italki](https://www.italki.com/) o [Cambly](https://www.cambly.com/): **2 sesiones/semana** con tutor (30 min) — INVERSIÓN CLAVE
- **Semanas 79-104 (B2→C1):**
  - Mock interviews en inglés
  - Grabarte explicando system design (5 min) y autocriticarte
  - Toastmasters online (opcional)

### Recursos
- 🎯 **italki / Preply / Cambly** ($8-15 USD/hora) — el ROI más alto de todo el roadmap
- 📺 **Engineering podcasts:** Software Engineering Daily, Data Engineering Podcast
- 📺 **YouTube en inglés:** todos los canales técnicos del roadmap original
- 📖 **Lectura técnica:** blog engineering de Meta, Uber, Netflix, Airbnb, Stripe

### Certificación opcional (refuerza CV)
- **TOEFL iBT** (90+) o **IELTS** (7.0+) — útil si aplicas con visa H-1B / Skilled Worker UK

---

## 🌍 Track E · Open Source + Visibilidad (semanas 27-104)

**Por qué importa:** Diferencia brutal en el CV. Demuestra que sabes leer código complejo y colaborar.

### Plan por fases
- **Semanas 27-52:** identificar 2-3 proyectos OSS que uses (Airflow, dbt, Great Expectations, Spark, DuckDB, Delta-rs). Issues "good first issue" → 3-5 PRs aceptados.
- **Semanas 53-78:** contribuciones medianas (features pequeños, bug fixes), 5-10 PRs.
- **Semanas 79-104:** contribución sustancial a 1 proyecto (idealmente con tu nombre en release notes).

### Targets recomendados (Data Engineering)
- **Apache Airflow** — providers, operators
- **dbt-core / dbt adapters** — adapters para nuevos warehouses
- **Apache Iceberg / Delta-rs**
- **DuckDB** (Rust/C++ pero Python bindings)
- **Dagster** — alternativa moderna a Airflow
- **Polars** (Rust, alta visibilidad)
- **Great Expectations**

### Visibilidad pública (¡crítico para FAANG!)
- 📝 **Blog técnico propio** (Hashnode/Medium/Substack) — 1 post/mes desde semana 27 = **24 posts** al final
- 📺 **Charlas en meetups locales** — mínimo 3 al final del roadmap (AWS User Group, PyData, Databricks)
- 📣 **Twitter/X técnico** — engagement con la comunidad #DataEngineering
- 🎙 **Podcast invitado** opcional — gran señal de seniority

---

## 🧠 Track F · Behavioral + Leadership (semanas 79-104)

Meta y Amazon **rechazan candidatos técnicamente brillantes por mal behavioral**.

### Meta: "Jedi" round
- Conflicto, ambigüedad, fracaso, impacto, growth mindset
- **Preparar 8-10 historias STAR** que cubran todos los themes

### Amazon: 16 Leadership Principles
- Cada respuesta debe mapear a 1-2 LPs (Customer Obsession, Ownership, Invent and Simplify, Are Right A Lot, Learn and Be Curious, Hire and Develop the Best, Insist on the Highest Standards, Think Big, Bias for Action, Frugality, Earn Trust, Dive Deep, Have Backbone, Deliver Results, Strive to Be Earth's Best Employer, Success and Scale Bring Broad Responsibility)
- Practicar respuestas para cada LP
- Recurso: [Amazon LP Interview Questions](https://www.amazon.jobs/en/principles)

### Google: "Googleyness & Leadership"
- Más relajado que Meta/Amazon pero evalúa colaboración + ambigüedad

### Recursos
- 📘 *The STAR Interview* — Misha Yurchenko
- 🎯 [**Hello Interview**](https://www.hellointerview.com/) — mocks con eng. de FAANG
- 🎯 [**interviewing.io**](https://interviewing.io/) — mocks anónimos con ingenieros senior
- 📺 [Jeff H Sipe - Practice Interviews](https://www.youtube.com/@JeffHSipePracticeInterviews)
- 🆓 Reddit: r/cscareerquestions, r/leetcode

---

## 🎯 Proyectos upgrade a nivel FAANG

Tus proyectos del roadmap original están bien, pero **debes upgradearlos** para FAANG. Diferencia: **escala real + decisiones de ingeniería defendibles**.

### Upgrade del Capstone (Proyecto 12)

**Versión "básica":** pipeline lakehouse con datos públicos.
**Versión "FAANG-ready":** debe tener AL MENOS 5 de estas características:

- ✅ **Escala demostrable:** 100M+ registros, GBs procesados, benchmark documentado
- ✅ **Streaming real:** Kafka/Kinesis con >1k eventos/seg sostenidos
- ✅ **Multi-region / HA:** réplica cross-region o failover demo
- ✅ **CI/CD multi-env:** dev/staging/prod con promoción automatizada
- ✅ **Tests serios:** unit + integration + data quality + load tests
- ✅ **Observability completa:** métricas, logs, traces, dashboards Grafana
- ✅ **Cost optimization:** decisiones documentadas con números ($X/mes vs $Y)
- ✅ **Security:** secrets manager, encryption at rest/in transit, RBAC
- ✅ **IaC 100%:** Terraform + cero clicks manuales
- ✅ **Documentación de architecture decisions (ADRs)** estilo Amazon

### Proyectos extra recomendados (semanas 79-104)
- **Proyecto FAANG #1: Streaming a escala** — replicar arquitectura de "X engineering blog" (Uber, Netflix, Airbnb) y publicar comparativa.
- **Proyecto FAANG #2: Contribución OSS sustancial** — 1 feature mediano mergeado en proyecto top.
- **Proyecto FAANG #3: Paper implementation** — implementar paper como Dremel, F1, Spanner (simplificado). Sello "Google-level".

### READMEs estilo FAANG
- Architecture diagram (Excalidraw/draw.io)
- "Problem statement" como un PRD
- Decisiones técnicas con trade-offs explícitos
- Benchmarks con números reales
- "What I would do differently" — humildad y growth mindset

---

## 📅 Calendario de aplicaciones FAANG

### Cuándo empezar
- **Semana 70-80:** primeras aplicaciones a **empresas Tier-2/3** para ganar experiencia de entrevistas (NO FAANG aún).
- **Semana 90-95:** **referrals warmed up** — networking activo con empleados FAANG vía LinkedIn.
- **Semana 100-104:** aplicaciones formales FAANG con referrals.

### Estrategia de referrals (semanas 53+)
- Conectar con 5-10 Data Engineers de FAANG por semana en LinkedIn
- Aportar valor primero (comentarios útiles en sus posts, compartir tu trabajo)
- Pedir referral SÓLO después de relación genuina (3-4 semanas)
- Cada referral = 1.5x probabilidad de pasar screening

### Por dónde aplicar (Data Engineer 2026)
**Tier 1 (objetivo principal):**
- Meta — *Production Engineer (Data) / Data Engineer*
- Google — *Data Engineer / Software Engineer, Data*
- Amazon — *Data Engineer / BIE (Business Intelligence Engineer)*
- AWS — *Data Engineer en equipos de servicio (Glue, Redshift, etc.)*
- Apple — *Data Engineer*
- Netflix — *Senior Data Engineer (requiere experiencia, target stretch)*
- Microsoft — *Data Engineer II*

**Tier 1.5 (highly competitive, igual compensation):**
- Databricks, Stripe, Airbnb, Uber, LinkedIn, Pinterest, Snap, DoorDash, Snowflake

**Tier 2 (excelente para empezar):**
- IBM, Oracle, Salesforce, Adobe, ServiceNow, Cloudera, Booking, Spotify, Shopify

---

## 💰 Compensación esperada (target FAANG, USD)

> Niveles de entry-level (L3/L4 Google, E3/E4 Meta, SDE I/II Amazon)

| Empresa | Base | Stock (4y) | Bonus | Total Year 1 |
|---------|------|-----------|-------|--------------|
| Meta (E3) | $160k | $80k/año | $30k | ~$270k |
| Google (L3) | $140k | $50k/año | $25k | ~$215k |
| Amazon (SDE I) | $130k | $35k/año* | $25k signing | ~$190k |
| AWS (DE I) | $125k | $35k/año* | $20k | ~$180k |
| Databricks | $150k | $70k/año | $25k | ~$245k |
| IBM (Tier 2) | $110k | $10k | $15k | ~$135k |

*Amazon: stock vest 5/15/40/40 (back-loaded), compensa con sign-on año 1-2

**México / LATAM remote:** mismo rol remoto = $60k-$120k USD (aún muy competitivo localmente).

---

## 🛂 Consideraciones de visa / relocación

Si tu plan es EU/USA on-site:

- **USA — H-1B:** lotería (~25% probabilidad). Empresas que sponsorizan: Meta, Google, Amazon, Microsoft, Apple (alta tasa). Big Tech sí sponsoriza Data Engineers.
- **USA — L-1:** transfer interno (empezar en LATAM en Big Tech y transferir).
- **Canadá — Express Entry / GSS:** path más predecible que H-1B.
- **UK — Skilled Worker Visa:** Meta, Google, Amazon en London sponsorizan.
- **Alemania — EU Blue Card:** salario mínimo ~€45k tech, fácil.
- **España — Visa Nómada Digital:** trabajar remoto para empresa extranjera.

**Tip clave:** preparar **English certs (TOEFL/IELTS)** desde el año 1.

---

## 🔄 Cambios al ROADMAP_SEMANAL.md original

### Aumentar dedicación semanal: 10-15 hrs → **20-25 hrs**
Si NO puedes subir a 20+ hrs/sem, mantén 15 hrs/sem y **extiende el roadmap a 30-36 meses** (sigues llegando a FAANG, sólo tarda más).

### Añadir TODAS las semanas
- 4 hrs **LeetCode** (1 problema/día)
- 2 hrs **System Design** (1 capítulo libro + 1 diseño)
- 2 hrs **CS Fundamentals** (OS/Networking/DB internals según fase)
- 1 hr **inglés con tutor** (2 sesiones de 30 min)
- 30 min **escribir blog/Twitter**

### Reemplazar/upgradear proyectos
| # Original | Upgrade FAANG |
|-----------|----------------|
| 4. DWH e-commerce | Añadir 100M+ filas, query benchmarks, índices vs sin índices |
| 8. ETL batch | Procesar 10GB+, paralelismo Spark documentado, IaC |
| 10. Streaming | 10k events/seg sostenidos, exactly-once, observability completa |
| 12. Capstone | Cumplir 5+ requisitos "FAANG-ready" listados arriba |

### Certificaciones extra (opcionales pero buenas)
- **AWS Solutions Architect Associate** (semanas 53-58, antes de DEA-C01)
- **AWS DevOps Engineer Professional** (opcional, año 2)
- **CKA (Certified Kubernetes Administrator)** (semanas 70-78) — diferenciador
- **Google Cloud Professional Data Engineer** (semanas 92-98) — abre puerta Google

---

## 🎯 Métricas finales para ser "FAANG-ready"

Al final de las 104 semanas debes poder:

### Hard skills
- ✅ Resolver LeetCode Medium en ≤30 min, Hard en ≤45 min (consistente)
- ✅ Diseñar pipeline real-time 1M events/sec en pizarra en 45 min
- ✅ Explicar Spark shuffle, Kafka exactly-once, Delta time travel sin notas
- ✅ Escribir SQL con window functions complejas sin googlear
- ✅ Implementar features en Python idiomático (decorators, generators, async)

### Soft skills
- ✅ Hablar inglés técnico fluido (B2-C1, mock interview sin trabarse)
- ✅ 8+ historias STAR pulidas, mapeadas a Amazon LPs / Meta themes
- ✅ Pitch personal de 60 segundos memorable
- ✅ Capacidad de explicar tu trabajo a no-técnicos

### Portfolio
- ✅ 12+ proyectos GitHub con READMEs estilo FAANG
- ✅ 1 capstone "FAANG-ready" con 5+ requisitos cumplidos
- ✅ 24+ blog posts técnicos
- ✅ 5+ PRs mergeados en proyectos OSS top
- ✅ 600+ problemas LeetCode resueltos
- ✅ 4 certs (AWS CP, AWS DEA, Databricks Associate + Professional)

### Visibilidad
- ✅ LinkedIn 500+ conexiones de calidad (DEs, recruiters FAANG)
- ✅ Twitter/X con ~500 seguidores en nicho data
- ✅ 3+ charlas en meetups
- ✅ 2-3 referrals warm en FAANG companies

---

## 🚨 Anti-patrones que TE SACAN de FAANG

❌ **Tutorial hell:** seguir 30 cursos sin proyectos originales
❌ **Cert-chasing:** acumular certs sin saber resolver LeetCode Medium
❌ **No practicar coding en vivo:** sólo tienes ~30 min en pizarra, hay que **pensar en voz alta**
❌ **No mockear behavioral:** llegar a Meta sin 8 historias STAR pulidas = rechazo
❌ **Aplicar sin referral:** screening rate ~5% sin referral, ~25% con referral
❌ **No estudiar la compañía:** preguntar "qué hace Meta" en entrevista = -1000 puntos
❌ **Solo inglés escrito:** sin práctica hablada → te traba la entrevista a los 5 min
❌ **No iterar después de rechazos:** cada loop fallido tiene 6-12 meses de cooldown, hay que aprender

---

## 📚 Recursos premium recomendados (inversión total ~$500 USD/año 2)

| Recurso | Costo | Vale la pena |
|---------|-------|--------------|
| **italki / Cambly** (inglés) | ~$50/mes | ⭐⭐⭐⭐⭐ |
| **Hello Interview Premium** | $35/mes | ⭐⭐⭐⭐⭐ (año 2) |
| **interviewing.io mocks** | $225/mock | ⭐⭐⭐⭐ (3-5 mocks pre-FAANG) |
| **LeetCode Premium** | $35/mes | ⭐⭐⭐⭐ (acceso a preguntas por empresa) |
| **AlgoExpert** | $99/año | ⭐⭐⭐ (alternativa a LeetCode) |
| **ByteByteGo** | $20/mes | ⭐⭐⭐⭐ (system design) |
| **Educative.io System Design** | $200/año | ⭐⭐⭐⭐ |
| **AWS / Databricks exam vouchers** | ~$650 total | ⭐⭐⭐⭐ |

**Inversión total año 2:** ~$1,500-2,000 USD. **ROI esperado:** salario $180-270k USD/año = **>10,000% en año 1**.

---

## 🗓 Roadmap visual upgraded

```
Mes  1 ─────────────────────────────────────────────  Mes 24
     │ Python │ SQL │ AWS CP │ Spark │ AWS DEA │ Stream │ DBX A │ DBX P │ JOB
     ├────────────────────────────────────────────────────────────────────┤
DSA  │ Easy ░░░░░░░░░ Medium ▒▒▒▒▒▒▒▒▒▒▒▒▒▒ Hard ████████ Mock interviews│
SysD │           DDIA 1ra ░░░░░░░  DDIA 2da ▒▒▒▒▒  20 designs ████████████│
CS   │ OS ░░░ Net ░░░ DB int ▒▒▒ Distributed ▒▒▒▒▒▒▒▒▒▒                    │
EN   │ B1→B2 ░░░░░░░░░░ B2 con tutor ▒▒▒▒▒▒▒▒▒▒ B2→C1 ████ Mocks EN ████  │
OSS  │              Watch ░░░ First PRs ▒▒▒▒▒ Mid PRs ▒▒▒▒ Major ████      │
Beh  │                                              Story bank ▒▒▒ Mocks █│
```

---

## 🧭 Pasos siguientes inmediatos (esta semana)

1. ✅ Decidir si puedes subir a 20+ hrs/sem o extender a 30 meses
2. ✅ Crear cuentas: LeetCode, NeetCode, Hello Interview (free tier), italki
3. ✅ Cambiar OS/móvil/Netflix a **inglés** desde HOY
4. ✅ Comprar *Designing Data-Intensive Applications* (físico o Kindle)
5. ✅ Empezar Track A (LeetCode) y Track D (inglés) **en paralelo a la semana 1** del roadmap principal
6. ✅ Crear Twitter/X técnico (handle relacionado a "data eng" + tu nombre)
7. ✅ Listar 20 Data Engineers de FAANG en LinkedIn → seguir y empezar engagement

---

**Última actualización:** 2026-06-25
**Versión:** 1.0 — FAANG track
