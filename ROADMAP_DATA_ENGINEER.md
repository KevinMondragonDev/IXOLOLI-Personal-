# 🚀 Roadmap: De Cero a Data Engineer Competitivo (AWS + Databricks + FAANG-ready)

> **Duración total:** 24 meses (2 años)
> **Dedicación:** 20–25 horas/semana para perfil FAANG-ready (~2,000–2,500 horas totales)
> **Punto de partida:** Cero conocimientos de programación
> **Meta final:** Data Engineer empleable en empresas Tier-1 (Meta, AWS, Google, IBM, Databricks)
> **Enfoque:** Fundamentos CS + Herramientas de mercado real + Certificaciones + Portfolio + Visibilidad

> **Archivos complementarios:**
> - `ROADMAP_SEMANAL.md` — desglose semana a semana
> - `ROADMAP_FAANG.md` — tracks paralelos (DSA, System Design, CS Fundamentals, inglés)

---

## 🧠 Sistema Anti-olvido (aplicar desde semana 1)

> El 80% de lo estudiado sin refuerzo se olvida en 7 días (Ebbinghaus). Implementa esto desde el inicio.

- **Anki (spaced repetition):** crear 5-10 flashcards por tema nuevo (comandos Spark, APIs boto3, conceptos Delta/Iceberg, SQL patterns). App gratis, 15 min/día.
- **Técnica Feynman:** después de cada semana, explica el tema principal en voz alta como si se lo enseñaras a alguien sin contexto técnico. Si no puedes, no lo has aprendido.
- **Blogs de ingeniería como estudio diario:** 15-20 min cada mañana leyendo posts reales de producción (Netflix, Uber, Airbnb, Meta). Ver sección de recursos permanentes.
- **Enseñar = aprender:** por cada módulo terminado, escribe 1 post (LinkedIn/Medium/Hashnode) explicándolo. 24 posts al final = diferenciador brutal en el mercado.

---

## 📋 Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Stack Final Esperado](#stack-final-esperado)
3. [Año 1 — Fundamentos](#año-1--fundamentos)
   - [Q1: Programación, Linux y Git](#q1-meses-1-3--programación-linux-y-git)
   - [Q2: SQL y Bases de Datos](#q2-meses-4-6--sql-y-bases-de-datos)
   - [Q3: Cloud y AWS Cloud Practitioner](#q3-meses-7-9--cloud-y-aws-cloud-practitioner)
   - [Q4: Spark, Airflow y Docker](#q4-meses-10-12--spark-airflow-y-docker)
4. [Año 2 — Especialización](#año-2--especialización)
   - [Q5: AWS Data Engineer Associate](#q5-meses-13-15--aws-data-engineer-associate)
   - [Q6: Streaming, dbt y CI/CD](#q6-meses-16-18--streaming-dbt-y-cicd)
   - [Q7: Databricks Associate](#q7-meses-19-21--databricks-data-engineer-associate)
   - [Q8: Databricks Professional + Empleo](#q8-meses-22-24--databricks-professional--empleo)
5. [Certificaciones](#certificaciones-resumen)
6. [Portfolio de Proyectos](#portfolio-de-proyectos)
7. [Recursos Permanentes](#recursos-permanentes)
8. [Búsqueda de Empleo](#búsqueda-de-empleo)
9. [Métricas de Éxito](#métricas-de-éxito)

---

## Visión General

| Fase | Meses | Foco | Entregables clave |
|------|-------|------|-------------------|
| **Q1** | 1–3 | Python, Linux, Git | 3 mini-proyectos en GitHub |
| **Q2** | 4–6 | SQL avanzado, modelado | Modelo dimensional + dashboard |
| **Q3** | 7–9 | AWS Cloud Practitioner | ✅ Certificación CLF-C02 |
| **Q4** | 10–12 | Spark, Airflow, Docker | Pipeline ETL batch |
| **Q5** | 13–15 | Servicios de datos AWS | ✅ AWS Data Engineer Associate |
| **Q6** | 16–18 | Streaming, dbt, IaC | Pipeline streaming end-to-end |
| **Q7** | 19–21 | Databricks Lakehouse | ✅ Databricks DE Associate |
| **Q8** | 22–24 | Databricks avanzado, MLOps | ✅ Databricks DE Professional + Empleo |

---

## Stack Final Esperado

**Lenguajes:** Python (avanzado), SQL (avanzado), Bash, Scala (básico)
**Cloud AWS:** S3, Glue, Athena, Redshift, Lambda, EMR, Kinesis, Step Functions, IAM, CloudFormation
**Databricks:** Delta Lake, Unity Catalog, Workflows, DLT (Delta Live Tables), Photon
**Formatos de tabla abiertos:** Delta Lake, **Apache Iceberg** (crítico), Apache Hudi (overview)
**Orquestación:** Apache Airflow, AWS Step Functions, Databricks Workflows
**Procesamiento:** Apache Spark (PySpark), **Polars**, **DuckDB**, dbt
**Streaming:** Apache Kafka, AWS Kinesis, Spark Structured Streaming, **Apache Flink** (intro)
**Ingesta moderna:** **Airbyte** (open source), Fivetran (overview), AWS DMS
**Warehousing:** Redshift, **Snowflake** (intro), DuckDB
**DevOps/IaC:** Git, Docker, **Kubernetes** (básico), Terraform, GitHub Actions
**Modelado:** Kimball (dimensional), Data Vault 2.0, Medallion architecture, **Data Mesh** (conceptos)
**Data Quality / Observabilidad:** Great Expectations, dbt tests, **Soda Core**, **OpenLineage**
**MLOps básico:** MLflow, Feature Store (intro)

> **Formatos de tabla — por qué los tres importan:**
> | Formato | Creado por | Lo usan | AWS nativo |
> |---------|-----------|---------|-----------|
> | Delta Lake | Databricks | Databricks, Azure | Glue, EMR (soporte) |
> | **Iceberg** | Netflix/Apple | Meta, Netflix, Apple, Snowflake | Glue, Athena (nativo) |
> | Hudi | Uber | Uber, Amazon | EMR, Glue (soporte) |
>
> Iceberg es hoy el más demandado en FAANG. El plan te enseña Delta en profundidad e Iceberg sólidamente.

---

# Año 1 — Fundamentos

## Q1 (Meses 1-3) — Programación, Linux y Git

### 🎯 Objetivos
- Dominar Python a nivel intermedio (POO, módulos, manejo de archivos, APIs).
- Manejar terminal Linux y comandos básicos de Bash.
- Usar Git y GitHub con fluidez (branches, merges, PRs).

### 📚 Temario detallado

**Mes 1 — Python básico**
- Variables, tipos, operadores, strings
- Estructuras de control (if/elif/else, for, while)
- Listas, tuplas, sets, diccionarios
- Funciones, scope, *args/**kwargs
- Manejo de excepciones

**Mes 2 — Python intermedio**
- Programación orientada a objetos (clases, herencia, polimorfismo)
- Módulos, paquetes, virtual environments (venv, pip)
- Lectura/escritura archivos (CSV, JSON, TXT)
- Librerías: `requests`, `os`, `datetime`, `pathlib`
- Introducción a `pandas` y `numpy`

**Mes 3 — Linux + Git**
- Comandos esenciales: `ls`, `cd`, `cp`, `mv`, `rm`, `grep`, `find`, `chmod`, `chown`, pipes `|`, redirects `>`
- Scripting Bash básico
- Git: init, add, commit, branch, merge, rebase, log
- GitHub: repos, PRs, issues, README.md, .gitignore
- SSH keys, autenticación

### 📖 Recursos recomendados
- 🇪🇸 **Curso:** [Python desde Cero - MoureDev (YouTube)](https://www.youtube.com/@mouredev)
- 🇪🇸 **Curso:** [Curso de Python - Pildoras Informáticas](https://www.youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS)
- 🇬🇧 **Libro:** *Automate the Boring Stuff with Python* — Al Sweigart (gratis online)
- 🇬🇧 **Curso:** [CS50P - Harvard (gratis)](https://cs50.harvard.edu/python/)
- 🇬🇧 **Linux:** [Linux Journey](https://linuxjourney.com/) (gratis)
- 🇬🇧 **Git:** [Pro Git Book](https://git-scm.com/book/en/v2) (gratis)
- 🛠 **Práctica:** [Exercism Python Track](https://exercism.org/tracks/python), [HackerRank](https://www.hackerrank.com/domains/python)

### 🛠 Proyectos
1. **Scraper de noticias** con `requests` + `BeautifulSoup` que guarda CSV.
2. **CLI de gestor de tareas** con argparse y persistencia en JSON.
3. **Análisis exploratorio** de un dataset público (Kaggle) con Pandas.

### ✅ Checkpoint Mes 3
- [ ] Resolver 100+ ejercicios de Python (Exercism/HackerRank)
- [ ] 3 proyectos en GitHub con README en inglés
- [ ] Cuenta de GitHub activa con commits diarios (streak)

---

## Q2 (Meses 4-6) — SQL y Bases de Datos

### 🎯 Objetivos
- Dominar SQL (DDL, DML, joins complejos, CTEs, window functions).
- Entender diseño relacional y normalización (1FN–3FN).
- Modelar un Data Warehouse dimensional (Kimball).

### 📚 Temario detallado

**Mes 4 — SQL fundamentos**
- SELECT, WHERE, ORDER BY, GROUP BY, HAVING
- JOINs (INNER, LEFT, RIGHT, FULL, CROSS, SELF)
- Subqueries y CTEs (`WITH`)
- Funciones de agregación
- INSERT, UPDATE, DELETE, MERGE

**Mes 5 — SQL avanzado**
- Window functions (ROW_NUMBER, RANK, LAG, LEAD, PARTITION BY)
- Índices y optimización de queries (EXPLAIN)
- Transacciones, ACID, niveles de aislamiento
- Stored procedures, triggers, views materializadas
- PostgreSQL como motor principal

**Mes 6 — Modelado de datos**
- Modelo entidad-relación (ERD)
- Normalización vs desnormalización
- **Kimball:** star schema, snowflake, hechos, dimensiones (SCD tipo 1/2/3)
- **Inmon** (visión general)
- Intro a NoSQL: MongoDB (documentos), Redis (key-value), DynamoDB

### 📖 Recursos
- 🇬🇧 **Libro:** *The Data Warehouse Toolkit* — Ralph Kimball (CLAVE para DE)
- 🇬🇧 **Curso:** [SQL for Data Analysis - Mode Analytics](https://mode.com/sql-tutorial/)
- 🇪🇸 **Curso:** [Curso SQL - Fazt (YouTube)](https://www.youtube.com/c/FaztTech)
- 🛠 **Práctica:** [LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/), [StrataScratch](https://www.stratascratch.com/), [SQLZoo](https://sqlzoo.net/)
- 🐘 **PostgreSQL:** [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)

### 🛠 Proyectos
4. **Modelo dimensional de e-commerce**: diseñar DWH para ventas (PostgreSQL), poblar con datos sintéticos, dashboards en Metabase/Superset.
5. **Migración OLTP → OLAP**: tomar un esquema normalizado y convertirlo a star schema.

### ✅ Checkpoint Mes 6
- [ ] Resolver 80+ ejercicios SQL (LeetCode/StrataScratch)
- [ ] Diseñar e implementar 1 DWH dimensional completo
- [ ] Publicar artículo en LinkedIn explicando Kimball

---

## Q3 (Meses 7-9) — Cloud y AWS Cloud Practitioner

### 🎯 Objetivos
- Entender fundamentos de Cloud Computing.
- Aprobar **AWS Certified Cloud Practitioner (CLF-C02)**.
- Conocer los servicios core de AWS relevantes para datos.

### 📚 Temario detallado

**Mes 7 — Fundamentos de Cloud + AWS básico**
- Modelos cloud: IaaS, PaaS, SaaS
- Modelos de despliegue: pública, privada, híbrida
- AWS Global Infrastructure: regiones, AZs, edge locations
- Modelo de responsabilidad compartida
- AWS IAM: usuarios, grupos, roles, políticas, MFA
- Facturación y AWS Free Tier

**Mes 8 — Servicios core AWS**
- **Compute:** EC2, Lambda, ECS, Fargate
- **Storage:** S3, EBS, EFS, Glacier
- **Database:** RDS, DynamoDB, Aurora, ElastiCache, Redshift (intro)
- **Networking:** VPC, subnets, security groups, Route 53, CloudFront
- **Monitoring:** CloudWatch, CloudTrail
- AWS CLI y SDK boto3 (Python)

**Mes 9 — Intro a Data Engineering + repaso cert**
- Concepto de ETL vs ELT
- Diferencia entre Data Lake, Data Warehouse y Lakehouse
- Arquitectura Medallion (bronze/silver/gold)
- Batch vs streaming
- **Repaso intensivo CLF-C02 + simuladores**

### 📖 Recursos
- 🎓 **Curso oficial:** [AWS Cloud Practitioner Essentials (gratis - AWS Skill Builder)](https://skillbuilder.aws/)
- 🎓 **Curso:** [Stephane Maarek - Cloud Practitioner (Udemy)](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/)
- 🇪🇸 **Curso:** [AWS en Español - YouTube canal oficial](https://www.youtube.com/@awsenespanol)
- 📘 **Libro:** *AWS Certified Cloud Practitioner Study Guide* — Ben Piper
- 🧪 **Simuladores:** [TutorialsDojo (Jon Bonso)](https://tutorialsdojo.com/) — IMPRESCINDIBLE
- 📚 **Whitepapers AWS:** Well-Architected Framework, AWS Pricing

### 🛠 Proyectos
6. **App serverless en AWS**: S3 + Lambda + DynamoDB + API Gateway. Subir archivos a S3 que disparan Lambda y guardan metadata en DynamoDB.
7. **Backup automatizado**: script Python con `boto3` que sube backups a S3 con lifecycle policies a Glacier.

### ✅ Checkpoint Mes 9
- [ ] ✅ **Certificación AWS Cloud Practitioner aprobada** (~$100 USD)
- [ ] 2 proyectos AWS en GitHub
- [ ] Cuenta AWS configurada con billing alerts

---

## Q4 (Meses 10-12) — Spark, Airflow y Docker

### 🎯 Objetivos
- Procesar datos a escala con PySpark.
- Orquestar pipelines con Apache Airflow.
- Contenerizar aplicaciones con Docker.

### 📚 Temario detallado

**Mes 10 — Apache Spark + PySpark**
- Arquitectura Spark: driver, executors, cluster manager
- RDDs vs DataFrames vs Datasets
- Transformaciones lazy vs acciones
- Particionamiento, shuffle, broadcast joins
- Spark SQL, UDFs
- Optimización: catalyst optimizer, Tungsten, AQE
- Formatos: Parquet, ORC, Avro, Delta

**Mes 11 — Apache Airflow**
- Conceptos: DAGs, tasks, operators, sensors, hooks
- Scheduler, executor, web UI
- XComs, branching, conditional logic
- Best practices: idempotencia, atomicidad
- Despliegue local con Docker Compose

**Mes 12A — DuckDB + Polars (nuevo — herramientas modernas single-node)**
- **DuckDB:** motor OLAP embebido, SQL sobre Parquet/CSV sin cluster, comparativa vs Athena
- **Polars:** DataFrame API 10-50x más rápida que Pandas, lazy evaluation, expresiones
- Cuándo usar Polars/DuckDB vs Spark (decisión de diseño crítica en entrevistas)
- Pipeline análisis local con DuckDB → exportar a S3

**Mes 12B — Docker + primer pipeline ETL completo**
- Docker: imágenes, contenedores, volúmenes, networks
- Dockerfile, docker-compose
- Pipeline batch end-to-end: ingest → transform → load
- Logging, monitoring, alertas básicas

### 📖 Recursos
- 📘 **Libro:** *Learning Spark, 2nd Edition* — Damji et al. (O'Reilly, gratis vía Databricks)
- 🎓 **Curso:** [Apache Spark with Python - Frank Kane (Udemy)](https://www.udemy.com/course/taming-big-data-with-apache-spark-hands-on/)
- 📘 **Libro:** *Data Pipelines with Apache Airflow* — Manning
- 🎓 **Airflow:** [Astronomer Academy (gratis)](https://academy.astronomer.io/)
- 🐳 **Docker:** [Docker for Beginners - Nana Janashia (YouTube)](https://www.youtube.com/@TechWorldwithNana)
- 🦆 **DuckDB:** [DuckDB Documentation + blog](https://duckdb.org/docs/) (gratis)
- 🐻‍❄️ **Polars:** [Polars User Guide](https://docs.pola.rs/) (gratis)
- 🇪🇸 **Spark en español:** [Curso PySpark - Codo a Codo](https://www.youtube.com/results?search_query=pyspark+espa%C3%B1ol)

### 🛠 Proyectos
8. **Pipeline ETL batch**: Airflow + PySpark + PostgreSQL. Ingesta diaria de datos de una API pública, transformación con Spark, carga a DWH.
   - Bonus: dockerizado con docker-compose, README profesional, tests con pytest.
   - **Upgrade:** incluir benchmark Pandas vs Polars vs Spark para el mismo dataset (demuestra pensamiento crítico de ingeniería).

### ✅ Checkpoint Mes 12
- [ ] Pipeline ETL completo funcionando en local
- [ ] 5+ DAGs de Airflow en GitHub
- [ ] Manejo cómodo de Spark DataFrames API
- [ ] **Decisión:** ¿estoy listo para AWS DE Associate? Si no, +1 mes de práctica.

---

# Año 2 — Especialización

## Q5 (Meses 13-15) — AWS Data Engineer Associate

### 🎯 Objetivos
- Dominar el stack de datos AWS.
- Aprobar **AWS Certified Data Engineer - Associate (DEA-C01)**.

### 📚 Temario detallado

**Mes 13 — Servicios de datos AWS (parte 1) + formatos de tabla**
- **S3 avanzado:** lifecycle, versioning, cross-region replication, S3 Select, partitioning
- **AWS Glue:** crawlers, catalog, jobs (PySpark), workflows, triggers
- **Amazon Athena:** queries serverless sobre S3, particionamiento, CTAS
- **AWS Lake Formation:** governance y permisos finos
- **Apache Iceberg en AWS:** Glue + Athena + Iceberg nativo — compaction, time travel, schema evolution, partition evolution
- **Comparativa Delta vs Iceberg vs Hudi:** cuándo usar cada uno, trade-offs — tema frecuente en entrevistas FAANG
- **Airbyte (open source):** conectores, syncs incrementales, dbt + Airbyte juntos; alternativa a escribir extractores custom

**Mes 14 — Servicios de datos AWS (parte 2) + Snowflake intro**
- **Amazon Redshift:** arquitectura MPP, distribution keys, sort keys, Spectrum
- **Amazon EMR:** clusters Spark/Hadoop gestionados, EMR Serverless
- **AWS DMS:** migración de bases de datos
- **AWS Step Functions:** orquestación serverless
- **Amazon MWAA:** Airflow gestionado
- **AWS Kinesis (intro):** Data Streams, Firehose
- **Snowflake intro (2 semanas):** arquitectura virtual warehouses, Snowpipe ingesta, Streams + Tasks para CDC, Snowpark para Python — Snowflake domina el mercado de DWH empresarial fuera de AWS y es muy demandado

**Mes 15 — Repaso intensivo + certificación**
- Simuladores DEA-C01 (TutorialsDojo, ExamPro)
- Hands-on labs con cada servicio
- Whitepapers: *Data Analytics Lens*, *Big Data Options on AWS*
- Examen: **AWS Data Engineer Associate (~$150 USD)**

### 📖 Recursos
- 🎓 **Curso oficial:** [AWS Skill Builder - Data Engineer Learning Plan](https://skillbuilder.aws/)
- 🎓 **Curso:** [Stephane Maarek - AWS Data Engineer Associate (Udemy)](https://www.udemy.com/course/aws-data-engineer/)
- 🎓 **Curso:** [Andrew Brown - freeCodeCamp DEA-C01](https://www.youtube.com/@ExamProChannel)
- 🧪 **Simuladores:** TutorialsDojo DEA-C01
- 📚 **Whitepapers:** *AWS Lakehouse Architecture*, *Modern Data Architecture on AWS*

### 🛠 Proyectos
9. **Data Lake en AWS**: ingesta de datos (S3 raw) → Glue ETL → Athena queries → dashboard QuickSight. Arquitectura Medallion (bronze/silver/gold).

### ✅ Checkpoint Mes 15
- [ ] ✅ **AWS Certified Data Engineer Associate aprobada**
- [ ] 1 proyecto Data Lake completo en GitHub
- [ ] LinkedIn actualizado con certs

---

## Q6 (Meses 16-18) — Streaming, dbt y CI/CD

### 🎯 Objetivos
- Manejar pipelines de streaming.
- Adoptar dbt para transformaciones modernas (ELT).
- Implementar CI/CD para data pipelines.

### 📚 Temario detallado

**Mes 16 — Streaming completo: Kafka + Flink**
- **Apache Kafka:** topics, partitions, producers, consumers, consumer groups, exactly-once semantics
- **AWS Kinesis Data Streams + Firehose**
- **Spark Structured Streaming:** windows, watermarks, stateful processing
- Patrones: CDC (Change Data Capture), event sourcing, outbox pattern
- Schema registry (Avro, Protobuf)
- **Apache Flink (intro — 2 semanas):** por qué Flink vs Spark Streaming, DataStream API, Table API, event time vs processing time, checkpointing — Flink es el estándar para baja latencia en FAANG (Meta, Uber, LinkedIn); aparece frecuentemente en entrevistas de system design

**Mes 17 — dbt + Data Quality + Observabilidad + Data Contracts**
- **dbt Core:** models, sources, refs, materializations (view/table/incremental)
- Testing en dbt: unique, not_null, custom tests, singular tests
- Documentation, lineage graph
- **Great Expectations / Soda Core:** suites de validación, checkpoints
- **Data Contracts (profundo):** qué son, por qué importan, cómo implementarlos con dbt + Pydantic; empresas como PayPal, ING, Shopify los usan para gobernar pipelines entre equipos
- **Observabilidad de datos (data observability):** diferencia con métricas de infra, pilares (freshness, volume, distribution, schema, lineage), herramientas: Soda Core (open source), Monte Carlo (overview), **OpenLineage** + Marquez para lineage
- **A/B testing pipelines:** cómo diseñar pipelines para experimentos (tema frecuente en Meta, Airbnb, Booking); assignment tables, experiment metrics, statistical significance

**Mes 18 — Kubernetes + CI/CD + IaC**
- **Kubernetes básico:** pods, deployments, services, configmaps, secrets, namespaces — Spark on K8s es el estándar en empresas que no usan EMR/Databricks
- `kubectl` esencial, Helm charts (intro)
- Airflow en Kubernetes (KubernetesExecutor) — cómo se despliega en producción real
- **Terraform:** providers AWS, módulos, state, workspaces
- **GitHub Actions:** workflows para deploy de Glue jobs, Lambdas, dbt, Airflow DAGs
- Testing: pytest para PySpark, unit tests para DAGs
- Pre-commit hooks, linters (black, ruff, sqlfluff)
- Observabilidad infraestructura: Datadog/Grafana (dashboards y alertas)

### 📖 Recursos
- 📘 **Libro:** *Kafka: The Definitive Guide* — O'Reilly (gratis vía Confluent)
- 🎓 **Curso:** [Apache Kafka Series - Stephane Maarek (Udemy)](https://www.udemy.com/course/apache-kafka/)
- 🎓 **dbt:** [dbt Learn (gratis oficial)](https://learn.getdbt.com/)
- 📘 **Libro:** *Fundamentals of Data Engineering* — Joe Reis & Matt Housley (LECTURA OBLIGADA)
- 🎓 **Flink:** [Apache Flink Documentation + Training](https://nightlies.apache.org/flink/flink-docs-stable/docs/learn-flink/overview/) (gratis)
- 🎓 **Kubernetes:** [Kubernetes.io Tutorials](https://kubernetes.io/docs/tutorials/) + [Nana Janashia - K8s (YouTube)](https://www.youtube.com/@TechWorldwithNana)
- 🎓 **Soda Core:** [Soda Documentation](https://docs.soda.io/) (gratis)
- 🎓 **OpenLineage:** [openlineage.io](https://openlineage.io/) (gratis)
- 🎓 **Terraform:** [HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)
- 🎓 **GitHub Actions:** [GitHub Skills](https://skills.github.com/)

### 🛠 Proyectos
10. **Pipeline streaming end-to-end**: Kafka/Kinesis → Spark Structured Streaming + **Flink job paralelo** → **Iceberg** en S3 → dbt para gold layer → dashboard + OpenLineage lineage.
    - Infra con Terraform, CI/CD con GitHub Actions, data quality con Soda Core.
    - **Añadir:** comparativa de latencia Spark Streaming vs Flink para el mismo caso de uso (demostrable con benchmarks).

### ✅ Checkpoint Mes 18
- [ ] Pipeline streaming funcionando
- [ ] Infra como código (Terraform) para todo el stack
- [ ] CI/CD para deploys automáticos
- [ ] Blog post en Medium/Dev.to sobre el proyecto

---

## Q7 (Meses 19-21) — Databricks Data Engineer Associate

### 🎯 Objetivos
- Dominar la plataforma Databricks Lakehouse.
- Aprobar **Databricks Certified Data Engineer Associate**.

### 📚 Temario detallado

**Mes 19 — Databricks Lakehouse fundamentos**
- Arquitectura Databricks: control plane vs data plane
- Workspaces, clusters (all-purpose vs job), pools
- Notebooks: Python, SQL, Scala, R
- DBFS y mounts a S3
- Databricks Repos (integración Git)

**Mes 20 — Delta Lake + Unity Catalog**
- **Delta Lake:** ACID, time travel, schema evolution, VACUUM, OPTIMIZE, Z-ORDER
- **Delta Live Tables (DLT):** declarative pipelines, expectations
- **Unity Catalog:** governance, lineage, permisos, external locations
- **Databricks SQL:** warehouses, dashboards, alerts
- **Workflows:** orquestación nativa

**Mes 21 — Repaso + certificación Associate**
- Práctica con Databricks Community Edition (gratis) o trial
- [Databricks Academy Learning Plan](https://www.databricks.com/learn/training/data-engineer)
- Simuladores Databricks DE Associate
- Examen: **Databricks Data Engineer Associate (~$200 USD, online)**

### 📖 Recursos
- 🎓 **Oficial:** [Databricks Academy (gratis)](https://www.databricks.com/learn/training)
- 📘 **Libro:** *Delta Lake: The Definitive Guide* — O'Reilly
- 🎓 **Curso:** [Databricks Certified Data Engineer Associate - Derar Alhussein (Udemy)](https://www.udemy.com/course/databricks-certified-data-engineer-associate/)
- 🆓 **Community Edition:** [community.cloud.databricks.com](https://community.cloud.databricks.com/)
- 📺 **YouTube:** [Advancing Analytics](https://www.youtube.com/@AdvancingAnalytics)

### 🛠 Proyectos
11. **Lakehouse end-to-end en Databricks**: ingesta con Auto Loader → DLT (bronze/silver/gold) → Unity Catalog → Databricks SQL dashboard.

### ✅ Checkpoint Mes 21
- [ ] ✅ **Databricks Data Engineer Associate aprobada**
- [ ] 1 proyecto lakehouse completo
- [ ] Conocimiento sólido de Delta Lake

---

## Q8 (Meses 22-24) — Databricks Professional + Empleo

### 🎯 Objetivos
- Aprobar **Databricks Certified Data Engineer Professional**.
- Construir proyecto capstone destacado.
- Conseguir primer empleo como Data Engineer.

### 📚 Temario detallado

**Mes 22 — Databricks avanzado + Data Mesh**
- Performance tuning: Photon, partitioning avanzado, file sizing
- Streaming avanzado en Databricks (Structured Streaming + Delta)
- Asset Bundles (DAB) para CI/CD
- Cost optimization y FinOps para datos (cuánto cuesta cada query/job — tema en entrevistas)
- **MLOps básico:** MLflow, Feature Store (intro)
- Security: secrets, service principals, network isolation
- **Data Mesh (conceptos arquitectónicos — 1 semana):** ownership distribuido por dominios, data products, self-serve platform, federated governance — IBM, Microsoft, Zalando, Hellofresh lo usan; sale en system design interviews senior
- **Comunicación con stakeholders:** traducir requerimientos ambiguos de PMs a specs técnicas, escribir documentación que no-técnicos lean, decir "no" con alternativas — el 40% del trabajo real en FAANG

**Mes 23 — Capstone + cert Professional**
- **Proyecto capstone:** arquitectura completa lakehouse con datos reales (público), incluyendo streaming + batch + governance + CI/CD + monitoring.
- Repaso intensivo Databricks DE Professional
- Examen: **Databricks Data Engineer Professional (~$200 USD)**

**Mes 24 — Búsqueda de empleo**
- CV optimizado para ATS (formato simple, keywords técnicas)
- LinkedIn profesional (foto, headline, about, proyectos destacados)
- GitHub portfolio pulido con READMEs detallados
- Preparación entrevistas:
  - **System design** para data pipelines
  - **SQL coding** (window functions, optimización)
  - **PySpark coding**
  - **Behavioral** (STAR method)
- Aplicación a 5-10 ofertas/semana
- Networking: meetups, comunidades, contribuciones open source

### 📖 Recursos
- 🎓 [Databricks DE Professional Learning Path](https://www.databricks.com/learn/training/data-engineer)
- 📘 **Libro:** *Designing Data-Intensive Applications* — Martin Kleppmann (la BIBLIA, lectura recomendada todo el año 2)
- 🎯 **Entrevistas:** [Data Engineering Interview Questions - SeattleDataGuy](https://www.theseattledataguy.com/)
- 💼 **CV:** [Awesome CV templates](https://github.com/topics/awesome-cv)

### 🛠 Proyectos
12. **Capstone Project**: por ejemplo, "Real-time analytics platform for [domain]" usando datos reales (ej. NYC TLC, GitHub Archive, Spotify API).
    - Stack completo: Kafka/Kinesis + Databricks + Delta + Unity Catalog + dbt + Terraform + GitHub Actions + dashboard.
    - Documentación tipo case study (problema, arquitectura, decisiones técnicas, resultados).

### ✅ Checkpoint Mes 24
- [ ] ✅ **Databricks Data Engineer Professional aprobada**
- [ ] Capstone project deployado y documentado
- [ ] Mínimo 50 aplicaciones enviadas
- [ ] Mínimo 3 entrevistas técnicas completadas
- [ ] 🎯 **Oferta de trabajo como Data Engineer**

---

## Certificaciones Resumen

| Cert | Mes objetivo | Costo USD | Vigencia | Prioridad |
|------|-------------|-----------|----------|-----------|
| AWS Cloud Practitioner (CLF-C02) | 9 | $100 | 3 años | ⭐⭐⭐ |
| AWS Data Engineer Associate (DEA-C01) | 15 | $150 | 3 años | ⭐⭐⭐⭐⭐ |
| Databricks DE Associate | 21 | $200 | 2 años | ⭐⭐⭐⭐ |
| Databricks DE Professional | 23 | $200 | 2 años | ⭐⭐⭐⭐⭐ |
| **SnowPro Core** (Snowflake) | 16 | $175 | 2 años | ⭐⭐⭐⭐ — abre mercado no-AWS |
| **CKA** (Kubernetes) | 20 | $395 | 2 años | ⭐⭐⭐ — diferenciador FAANG |
| Google Cloud Pro Data Engineer | 22 | $200 | 2 años | ⭐⭐⭐ — opcional, abre Google |

**Total inversión en certs (obligatorias):** ~$650 USD
**Total con opcionales:** ~$1,220 USD

> 💡 **Tips de ahorro:**
> - AWS da voucher 50% a quienes ya tienen una cert anterior.
> - Databricks ofrece exámenes gratis en eventos Data+AI Summit (regístrate aunque sea virtual).
> - Linux Foundation (CKA) hace descuentos 40-50% en Black Friday/Cyber Monday.
> - SnowPro: Snowflake Summit tiene vouchers gratis para attendees.

---

## Portfolio de Proyectos

Al final del roadmap deberías tener mínimo **12 proyectos en GitHub**, organizados así:

| # | Proyecto | Tecnologías | Quarter |
|---|----------|-------------|---------|
| 1 | Web scraper | Python, BeautifulSoup | Q1 |
| 2 | CLI task manager | Python, argparse | Q1 |
| 3 | EDA dataset | Python, Pandas | Q1 |
| 4 | DWH dimensional e-commerce | PostgreSQL, Kimball | Q2 |
| 5 | Migración OLTP → OLAP | SQL | Q2 |
| 6 | App serverless | Lambda, S3, DynamoDB | Q3 |
| 7 | Backup automatizado | boto3, S3, Glacier | Q3 |
| 8 | Pipeline ETL batch | Airflow, Spark, Docker | Q4 |
| 9 | Data Lake AWS con Iceberg | S3, Glue, Athena, **Iceberg**, Airbyte | Q5 |
| 10 | Pipeline streaming multi-engine | Kafka, Spark + **Flink**, **Iceberg**, dbt, Soda, Terraform | Q6 |
| 11 | Lakehouse Databricks + Snowflake | DLT, Unity Catalog, **Snowflake** Snowpipe | Q7 |
| 12 | **Capstone FAANG-ready** | Stack completo, **Data Mesh domain**, K8s, OpenLineage | Q8 |

**Cada proyecto debe tener:**
- README profesional con diagrama de arquitectura
- Setup reproducible (Docker / Makefile)
- Tests automatizados
- CI/CD básico (a partir de Q5)
- Licencia open source

---

## Recursos Permanentes

### 📚 Libros imprescindibles
1. *Fundamentals of Data Engineering* — Joe Reis & Matt Housley (Q4-Q6)
2. **Designing Data-Intensive Applications** — Martin Kleppmann (Q5-Q8) — LA BIBLIA, leer 2 veces
3. *The Data Warehouse Toolkit* — Ralph Kimball (Q2)
4. *Learning Spark, 2nd Edition* — Damji et al. (Q4)
5. *Delta Lake: The Definitive Guide* — O'Reilly (Q7)
6. *Database Internals* — Alex Petrov (Q5) — para entender storage engines profundamente
7. *Streaming Systems* — Tyler Akidau et al. (Q6) — teoría detrás de Flink/Beam/Spark Streaming

### 📰 Newsletters
- [Data Engineering Weekly](https://www.dataengineeringweekly.com/)
- [Seattle Data Guy](https://seattledataguy.substack.com/)
- [Data Council](https://www.datacouncil.ai/)
- [ByteByteGo Newsletter](https://blog.bytebytego.com/) — system design semanal
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) — ingeniería en Big Tech

### 🏭 Blogs de ingeniería (leer 1 post/día — 15 min)

> Esta es la mejora de mayor ROI con menor costo. Aquí es donde aprenden los ingenieros de FAANG.

| Empresa | Blog | Qué aprender |
|---------|------|--------------|
| Netflix | [netflixtechblog.com](https://netflixtechblog.com) | Iceberg, Flink, Spark a escala PB |
| Uber | [eng.uber.com](https://eng.uber.com) | Hudi, Kafka masivo, ML platform, Flink |
| Airbnb | [medium.com/airbnb-engineering](https://medium.com/airbnb-engineering) | Airflow (lo crearon), Druid, Superset |
| LinkedIn | [engineering.linkedin.com](https://engineering.linkedin.com) | Kafka (lo crearon), Brooklin, Venice, Iceberg |
| Meta | [engineering.fb.com](https://engineering.fb.com) | Data Mesh, Presto, Scuba, Iceberg |
| Databricks | [databricks.com/blog](https://www.databricks.com/blog) | Delta, Photon, DLT, Iceberg interop |
| Stripe | [stripe.com/blog/engineering](https://stripe.com/blog/engineering) | Data quality, pipelines de pagos |
| AWS Big Data | [aws.amazon.com/blogs/big-data](https://aws.amazon.com/blogs/big-data) | Servicios AWS, casos reales |
| Snowflake | [medium.com/snowflake](https://medium.com/snowflake) | Iceberg, Snowpark, arquitecturas |

**Rutina:** 1 post al día en tu idioma preferido → tomar nota de 1 decisión de diseño interesante → añadir flashcard Anki.

### 🎙 Podcasts
- *Data Engineering Podcast* — Tobias Macey
- *The Data Stack Show*
- *Análisis y Decisión* (🇪🇸)

### 📺 YouTube
- [Advancing Analytics](https://www.youtube.com/@AdvancingAnalytics)
- [Seattle Data Guy](https://www.youtube.com/@SeattleDataGuy)
- [Andreas Kretz - The Plumbers of Data Science](https://www.youtube.com/@andreaskayy)
- [Darshil Parmar](https://www.youtube.com/@DarshilParmar)
- 🇪🇸 [Big Data Charly García](https://www.youtube.com/results?search_query=data+engineering+espa%C3%B1ol)

### 👥 Comunidades
- [r/dataengineering (Reddit)](https://www.reddit.com/r/dataengineering/)
- [Data Engineering Discord](https://discord.gg/dataengineering)
- [Databricks Community](https://community.databricks.com/)
- [dbt Slack Community](https://www.getdbt.com/community/join-the-community/) — muy activo
- [Apache Iceberg Slack](https://apache-iceberg.slack.com/) — comunidad OSS
- LinkedIn: seguir a Zach Wilson, Joe Reis, Chip Huyen, Maxime Beauchemin, Chad Sanderson (Data Contracts), Tristan Handy (dbt)

### 🃏 Anki — Mazos recomendados para Data Engineering
- **Crear tu propio mazo** es más efectivo que descargar uno, pero como punto de partida:
- Buscar en Anki Shared Decks: "SQL window functions", "Spark internals", "AWS Data Engineer", "Kafka"
- Regla: añadir 5-10 cards nuevas por semana, revisar 15 min/día

### 🆓 Datasets para proyectos
- [Kaggle](https://www.kaggle.com/datasets)
- [NYC Open Data](https://opendata.cityofnewyork.us/)
- [GitHub Archive](https://www.gharchive.org/)
- [AWS Open Data](https://registry.opendata.aws/)
- [Google BigQuery Public Datasets](https://cloud.google.com/bigquery/public-data)

---

## Búsqueda de Empleo

### Estrategia (Mes 22-24)
1. **Portfolio público y pulido**: GitHub con pin a los 4-5 mejores proyectos.
2. **LinkedIn optimizado**:
   - Headline: "Data Engineer | AWS Certified | Databricks | Python · SQL · Spark"
   - About: storytelling de tu transición + skills
   - Featured: capstone + artículos
3. **CV (1 página)**: skills, certs, proyectos > experiencia laboral previa si vienes de otra área.
4. **Aplicaciones**:
   - LinkedIn Jobs, Indeed, Glassdoor
   - Empresas tech directamente (careers page)
   - Consultoras (Accenture, Deloitte, Capgemini) — buen primer empleo
   - Startups en [Y Combinator Jobs](https://www.ycombinator.com/jobs)
5. **Networking**:
   - Meetups locales/virtuales (AWS User Groups, Databricks Meetups)
   - Conferencias: Data+AI Summit, AWS re:Invent
   - Contribuir a proyectos open source (Airflow, dbt, Spark)

### Preparación entrevistas
- **SQL:** LeetCode SQL 50, StrataScratch
- **Python/PySpark:** ejercicios de transformación, optimización
- **System design:** [Data Engineering System Design](https://github.com/karanpratapsingh/system-design)
- **Comportamentales:** método STAR, preparar 5-7 historias

### Rangos salariales orientativos (Data Engineer Junior)
- 🇲🇽 México: $30,000–$60,000 MXN/mes
- 🇪🇸 España: €25,000–€40,000/año
- 🇺🇸 Remoto USD: $50,000–$90,000/año (junior remoto)
- 🇺🇸 USA on-site: $90,000–$130,000/año

---

## Métricas de Éxito

### KPIs mensuales
- ⏱ **Horas estudiadas** (meta: 40-60 hrs/mes)
- 🟢 **Commits en GitHub** (meta: streak 5 días/semana)
- 📚 **Cursos completados**
- 🧪 **Ejercicios resueltos** (LeetCode/HackerRank)
- ✍️ **Posts publicados** (LinkedIn/Medium) — 1/mes desde Q3

### Hitos trimestrales (deben cumplirse para avanzar)
- **Q1:** 3 proyectos en GitHub + Python intermedio
- **Q2:** Diseñar DWH dimensional desde cero
- **Q3:** ✅ AWS Cloud Practitioner
- **Q4:** Pipeline ETL completo dockerizado
- **Q5:** ✅ AWS Data Engineer Associate
- **Q6:** Pipeline streaming con IaC + CI/CD
- **Q7:** ✅ Databricks DE Associate
- **Q8:** ✅ Databricks DE Professional + 🎯 **EMPLEO**

### Señales de alerta 🚨
- Más de 2 semanas sin commits → revisar motivación
- No completar checkpoint trimestral → extender el trimestre 1 mes
- No entender un concepto base → no avanzar, profundizar primero

---

## 🔱 Paths de Especialización (Año 3+)

Al terminar este roadmap serás un Data Engineer generalista sólido. El año 3 es el momento de especializarte. Define hacia dónde quieres ir:

| Especialización | Descripción | Stack adicional | Sueldo FAANG |
|-----------------|-------------|-----------------|--------------|
| **ML Platform Engineer** | Pipelines para ML, feature stores, model serving | MLflow, Feast, Ray, Kubeflow, Seldon | +20-40% |
| **Streaming Engineer** | Sistemas de baja latencia, millones eventos/seg | Flink profundo, Pulsar, ksqlDB, Pinot | +15-25% |
| **Data Platform Engineer** | Construir la plataforma interna de datos de la empresa | K8s profundo, Spark internals, observability | +20-30% |
| **Analytics Engineer** | Puente DE-Analítica, modelado para BI | dbt avanzado, semantic layer, Looker, Metricflow | Lateral |
| **Data Architect** | Diseño de arquitecturas a nivel empresa, decisiones tecnológicas | All-around, comunicación, governance, Data Mesh | +30-50% |

> **Señales tempranas de tu path (meses 18-24):** ¿disfrutas más el streaming, el modelado, construir herramientas internas, o explicar datos al negocio? Eso define tu especialización.

---

## 🎯 Mentalidad final

> *"Data Engineering is 20% writing code and 80% understanding the business problem, the data, and the trade-offs."* — Joe Reis

- **Consistencia > intensidad**: 2 hrs/día > 14 hrs el domingo.
- **Construir en público**: cada proyecto debe ser visible (GitHub + post).
- **Aprender haciendo**: por cada curso, 1 proyecto pequeño.
- **Networking desde el día 1**: no esperes a estar "listo" para conectar con DEs.
- **El roadmap es una guía, no una cárcel**: ajústalo a tu ritmo, pero respeta los hitos críticos (certs y portfolio).

---

**Última actualización:** 2026-06-25
**Versión:** 1.0
**Autor:** Roadmap personalizado generado por Devin
