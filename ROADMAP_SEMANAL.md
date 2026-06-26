# 📅 Roadmap Semanal — Data Engineer Competitivo (AWS + Databricks + FAANG-ready)

> **Complemento de** `ROADMAP_DATA_ENGINEER.md` y `ROADMAP_FAANG.md`
> **104 semanas** (24 meses) · **20–25 hrs/semana** para perfil FAANG-ready
> Marca cada semana al completarla. Si te atrasas, no saltes semanas: extiende el trimestre.

**Leyenda:** 📘 Teoría · 🛠 Práctica · ✍️ Entregable · 🧪 Ejercicios · ✅ Checkpoint · 🃏 Anki · 📰 Blog

---

## ⚡ Rutina diaria (aplicar TODAS las semanas desde el día 1)

> Estas actividades van ADEMÁS del tema semanal principal. Son hábitos, no opcionales.

| Actividad | Tiempo | Cuándo |
|-----------|--------|--------|
| 🃏 **Anki** — repasar flashcards del día | 15 min | Mañana, en ayunas |
| 📰 **Blog de ingeniería** — 1 post (Netflix/Uber/Meta/Airbnb) | 15 min | Mientras desayunas |
| 🧪 **LeetCode** — 1 problema (Easy→Medium→Hard según fase) | 45 min | Ver Track A en ROADMAP_FAANG.md |
| 🗣 **Inglés** — podcast técnico o sesión tutor | 30 min | Mediodía o noche |

**Total hábitos diarios:** ~1:45 hrs/día · **No negociables.**

---

# 🟢 AÑO 1 — FUNDAMENTOS

## Q1 · Programación, Linux y Git (Semanas 1-13)

### Mes 1 — Python básico

**Semana 1 — Setup + Python intro**
- 📘 Instalar Python 3.12, VS Code, extensiones (Python, Pylance)
- 📘 Variables, tipos primitivos, operadores, input/print
- 🧪 10 ejercicios básicos (sumas, conversiones, condicionales simples)
- ✍️ Crear cuentas: GitHub, LeetCode, Anki, italki (o Cambly para inglés)
- ✍️ Primer commit "Hello World" · Cambiar OS e interfaz a inglés
- 🃏 Crear primer mazo Anki: "Python basics" (5 cards esta semana)

**Semana 2 — Control de flujo**
- 📘 `if`/`elif`/`else`, operadores lógicos, `for`, `while`, `break`, `continue`
- 🧪 15 ejercicios (FizzBuzz, números primos, factorial, Fibonacci)
- ✍️ Repo `python-basics` en GitHub

**Semana 3 — Estructuras de datos**
- 📘 Listas, tuplas, sets, diccionarios + métodos
- 📘 List comprehensions, dict comprehensions
- 🧪 20 ejercicios en Exercism Python Track

**Semana 4 — Funciones y excepciones**
- 📘 Funciones, parámetros, `*args`/`**kwargs`, lambda, scope
- 📘 `try`/`except`/`finally`, raise, excepciones custom
- 🛠 Mini-proyecto: **calculadora CLI** con validación de errores
- ✅ Checkpoint Mes 1: dominio de sintaxis Python

### Mes 2 — Python intermedio

**Semana 5 — POO básico**
- 📘 Clases, atributos, métodos, `__init__`, `self`
- 📘 Encapsulamiento, métodos de clase vs instancia
- 🧪 Modelar 3 clases (Persona, Cuenta Bancaria, Libro)

**Semana 6 — POO avanzado**
- 📘 Herencia, polimorfismo, métodos mágicos (`__str__`, `__repr__`, `__eq__`)
- 📘 Decoradores (`@property`, `@staticmethod`, `@classmethod`)
- 🛠 Refactorizar calculadora a POO

**Semana 7 — Módulos, venv, archivos**
- 📘 Módulos, paquetes, `import`, `pip`, `venv`
- 📘 Lectura/escritura CSV, JSON, TXT con `csv`, `json`, `pathlib`
- 🧪 Leer CSV, filtrar y exportar JSON

**Semana 8 — APIs + librerías base**
- 📘 `requests` para APIs REST, parámetros, headers, status codes
- 📘 `datetime`, `os`, `logging`
- 🛠 **Proyecto 1: Web scraper de noticias** (BeautifulSoup + requests → CSV)
- ✍️ Subir a GitHub con README

### Mes 3 — Linux + Git

**Semana 9 — Linux fundamentos**
- 📘 Filesystem, navegación (`cd`, `ls`, `pwd`), permisos (`chmod`, `chown`)
- 📘 Manipulación archivos (`cp`, `mv`, `rm`, `mkdir`, `touch`)
- 🧪 Completar [Linux Journey - Grasshopper](https://linuxjourney.com/)

**Semana 10 — Linux avanzado + Bash**
- 📘 `grep`, `find`, `sed`, `awk`, pipes, redirects, `tar`
- 📘 Scripting Bash básico (variables, if, for)
- 🛠 Script Bash: backup automatizado de una carpeta

**Semana 11 — Git fundamentos**
- 📘 `init`, `add`, `commit`, `status`, `log`, `diff`
- 📘 Branches, `checkout`, `merge`, resolver conflictos
- 🧪 Crear repo desde cero con 5 branches + merges

**Semana 12 — GitHub + colaboración**
- 📘 Remotes, `push`, `pull`, `fetch`, PRs, issues
- 📘 `.gitignore`, README profesional, SSH keys
- 🛠 **Proyecto 2: CLI gestor de tareas** (argparse + JSON persistente)

**Semana 13 — Pandas + Polars intro + Proyecto 3**
- 📘 Pandas básico: Series, DataFrame, `read_csv`, filtros, `groupby`
- � **Polars intro:** instalar, cargar DataFrame, comparar sintaxis vs Pandas — empieza a familiarizarte ahora para profundizar en Q4
- �🛠 **Proyecto 3: EDA de dataset Kaggle** (Titanic o similar) — hacer el análisis en Pandas Y en Polars, comparar velocidad
- 📰 Leer primer post de Netflix Tech Blog o Airbnb Engineering
- ✅ **Checkpoint Q1:** 3 proyectos en GitHub + 100+ ejercicios Python + Anki con 50+ cards

---

## Q2 · SQL y Bases de Datos (Semanas 14-26)

### Mes 4 — SQL fundamentos

**Semana 14 — Setup + SELECT básico**
- 📘 Instalar PostgreSQL + DBeaver, cargar dataset de prueba (Pagila/Sakila)
- 📘 `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT`, operadores
- 🧪 15 queries en SQLZoo

**Semana 15 — Agregaciones + GROUP BY**
- 📘 `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, `HAVING`
- 📘 `DISTINCT`, alias, expresiones
- 🧪 20 ejercicios LeetCode SQL Easy

**Semana 16 — JOINs**
- 📘 INNER, LEFT, RIGHT, FULL, CROSS, SELF JOIN
- 📘 Casos de uso por tipo de JOIN
- 🧪 15 ejercicios con JOINs complejos

**Semana 17 — Subqueries + CTEs**
- 📘 Subqueries en SELECT/WHERE/FROM, correlacionadas
- 📘 CTEs (`WITH`), recursive CTEs
- 🧪 LeetCode SQL Medium x 10
- ✅ Checkpoint Mes 4

### Mes 5 — SQL avanzado

**Semana 18 — Window functions**
- 📘 `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE`
- 📘 `PARTITION BY`, `ORDER BY` en windows, frames
- 🧪 10 ejercicios StrataScratch

**Semana 19 — Window functions avanzadas**
- 📘 `LAG`, `LEAD`, `FIRST_VALUE`, `LAST_VALUE`
- 📘 Running totals, moving averages
- 🛠 Análisis de cohortes en SQL

**Semana 20 — DML + transacciones**
- 📘 `INSERT`, `UPDATE`, `DELETE`, `MERGE`/`UPSERT`
- 📘 Transacciones, ACID, niveles de aislamiento
- 🧪 Implementar transacciones con rollback

**Semana 21 — Performance + índices**
- 📘 `EXPLAIN`, `EXPLAIN ANALYZE`
- 📘 Índices B-tree, hash, parciales; cuándo NO indexar
- 📘 Stored procedures, triggers, views, materialized views
- 🛠 Optimizar 5 queries lentas

### Mes 6 — Modelado de datos

**Semana 22 — Modelo relacional**
- 📘 ERD, normalización (1FN, 2FN, 3FN, BCNF)
- 📘 Llaves primarias, foráneas, integridad referencial
- 🛠 Diseñar ERD de un sistema de biblioteca

**Semana 23 — Kimball: dimensional modeling**
- 📘 Star schema, snowflake, hechos (fact) y dimensiones
- 📘 Granularidad, surrogate keys
- 📘 Leer cap. 1-3 *The Data Warehouse Toolkit*

**Semana 24 — SCD + advanced Kimball**
- 📘 Slowly Changing Dimensions (Tipo 0, 1, 2, 3, 6)
- 📘 Fact tables: transaction, periodic snapshot, accumulating snapshot
- 📘 Bridge tables, role-playing dimensions

**Semana 25 — NoSQL intro**
- 📘 Teorema CAP, BASE vs ACID
- 📘 MongoDB (documentos), Redis (key-value), DynamoDB (intro)
- 🧪 CRUD en MongoDB con Python

**Semana 26 — Proyecto Q2**
- 🛠 **Proyecto 4: DWH dimensional e-commerce** (PostgreSQL)
  - ERD → DDL → poblar con datos sintéticos (Faker) → dashboard Metabase
- ✍️ Post LinkedIn: "Mi primer Data Warehouse dimensional"
- ✅ **Checkpoint Q2**

---

## Q3 · Cloud + AWS Cloud Practitioner (Semanas 27-39)

### Mes 7 — Fundamentos Cloud + AWS

**Semana 27 — Cloud computing concepts**
- 📘 IaaS, PaaS, SaaS; pública/privada/híbrida
- 📘 Beneficios cloud, modelo de costos (CAPEX vs OPEX)
- 📘 AWS Global Infrastructure: regiones, AZs, edge

**Semana 28 — AWS account + IAM**
- 📘 Crear cuenta AWS con MFA, billing alerts ($5, $20)
- 📘 IAM: users, groups, roles, policies, password policy
- 🛠 Crear usuario IAM con permisos limitados + access keys

**Semana 29 — Compute + Storage**
- 📘 EC2 (tipos, AMIs, key pairs, security groups)
- 📘 S3 (buckets, objects, storage classes, versioning)
- 🛠 Lanzar EC2 t2.micro, SSH, instalar nginx
- 🛠 Subir archivos a S3 con AWS CLI

**Semana 30 — Databases AWS**
- 📘 RDS (engines, multi-AZ, read replicas)
- 📘 DynamoDB (intro), Aurora, ElastiCache
- 🛠 Crear RDS PostgreSQL, conectar desde local

### Mes 8 — Servicios AWS core

**Semana 31 — Networking AWS**
- 📘 VPC, subnets (públicas/privadas), route tables, IGW, NAT
- 📘 Security Groups vs NACLs, Route 53, CloudFront
- 🛠 Crear VPC custom con 2 AZs

**Semana 32 — Serverless + monitoring**
- 📘 Lambda (triggers, layers, límites)
- 📘 CloudWatch (logs, metrics, alarms), CloudTrail
- 🛠 Lambda Python que procesa archivo subido a S3

**Semana 33 — boto3 + AWS CLI**
- 📘 AWS CLI: profiles, comandos esenciales
- 📘 boto3 SDK Python: clients vs resources, paginators
- 🛠 Script Python que lista todos los S3 buckets y su tamaño

**Semana 34 — Well-Architected Framework**
- 📘 6 pilares: operational excellence, security, reliability, performance, cost, sustainability
- 📘 Shared responsibility model
- 📘 Whitepaper: AWS Well-Architected

### Mes 9 — DE concepts + cert CLF-C02

**Semana 35 — Data Engineering concepts**
- 📘 ETL vs ELT, batch vs streaming
- 📘 Data Lake vs Data Warehouse vs Lakehouse
- 📘 Arquitectura Medallion (bronze/silver/gold)

**Semana 36 — Proyectos AWS prácticos**
- 🛠 **Proyecto 6: App serverless** (S3 + Lambda + DynamoDB + API Gateway)
- 🛠 **Proyecto 7: Backup automatizado** con boto3 + lifecycle a Glacier

**Semana 37 — Repaso CLF-C02 (parte 1)**
- 🧪 TutorialsDojo Practice Test 1 + 2 (analizar errores)
- 📘 Revisar áreas débiles

**Semana 38 — Repaso CLF-C02 (parte 2)**
- 🧪 TutorialsDojo Practice Test 3-6
- 📘 Final cheat sheet de servicios

**Semana 39 — Examen + descanso**
- ✅ **🎓 EXAMEN: AWS Cloud Practitioner (CLF-C02)**
- ✍️ Publicar logro en LinkedIn
- 🌴 1-2 días de descanso

---

## Q4 · Spark, Airflow y Docker (Semanas 40-52)

### Mes 10 — Apache Spark + PySpark

**Semana 40 — Spark fundamentos**
- 📘 Big Data: 3V, problema con single-node
- 📘 Arquitectura Spark: driver, executors, cluster manager
- 📘 RDDs vs DataFrames vs Datasets
- 🛠 Instalar PySpark local + primer DataFrame

**Semana 41 — PySpark DataFrame API**
- 📘 Transformaciones (select, filter, withColumn, groupBy, agg, join)
- 📘 Lazy evaluation, acciones (collect, count, show, write)
- 🧪 10 ejercicios con datasets reales

**Semana 42 — Spark SQL + optimización**
- 📘 Spark SQL, temp views, UDFs
- 📘 Particionamiento, shuffle, broadcast joins, AQE
- 📘 Catalyst optimizer, Tungsten
- 🛠 Optimizar pipeline con broadcast + repartition

**Semana 43 — Formatos columnares**
- 📘 Parquet, ORC, Avro vs CSV/JSON
- 📘 Compresión (Snappy, GZIP), columnar pruning, predicate pushdown
- 🛠 Convertir CSV → Parquet particionado + benchmark

### Mes 11 — Apache Airflow

**Semana 44 — Airflow fundamentos**
- 📘 Conceptos: DAGs, tasks, operators, scheduler, executor
- 📘 Instalación con Docker Compose
- 🛠 Primer DAG con BashOperator y PythonOperator

**Semana 45 — Operators + dependencies**
- 📘 Operators comunes: Python, Bash, Postgres, S3, Email
- 📘 Dependencies (`>>`, `<<`), task groups
- 🛠 DAG con 5+ tasks y dependencias complejas

**Semana 46 — XComs + sensors + branching**
- 📘 XComs (pasar datos entre tasks), TaskFlow API
- 📘 Sensors (file, S3, time), branching, trigger rules
- 🛠 DAG que espera archivo S3 → procesa → branchea por resultado

**Semana 47 — Best practices Airflow**
- 📘 Idempotencia, atomicidad, retries, backfill
- 📘 Variables, Connections, Pools, SLAs
- 🛠 Refactorizar DAG anterior con best practices

### Mes 12 — Docker + Proyecto ETL completo

**Semana 48 — Docker básico**
- 📘 Imágenes, contenedores, layers, Dockerfile
- 📘 Comandos: `build`, `run`, `ps`, `exec`, `logs`, `stop`
- 🛠 Dockerizar app Python (ETL simple)

**Semana 49 — Docker Compose + networks**
- 📘 docker-compose.yml, volúmenes, networks
- 📘 Multi-container apps
- 🛠 Compose con Airflow + Postgres + Spark

**Semana 50 — Proyecto 8 (parte 1)**
- 🛠 **Proyecto 8: Pipeline ETL batch end-to-end**
  - Diseño + setup repo + Docker Compose con Airflow/Spark/Postgres
  - Ingesta desde API pública (ej. OpenWeather, NYC TLC)

**Semana 51 — Proyecto 8 (parte 2)**
- 🛠 Transformaciones PySpark (bronze → silver → gold)
- 🛠 Carga a Postgres + tests con pytest
- 🛠 DAG Airflow orquestando todo

**Semana 52 — Proyecto 8 (cierre) + retrospectiva**
- ✍️ README profesional + diagrama de arquitectura (draw.io)
- ✍️ Blog post Medium/Dev.to sobre el proyecto
- ✅ **Checkpoint Q4 + retrospectiva Año 1** 🎉

---

# 🔵 AÑO 2 — ESPECIALIZACIÓN

## Q5 · AWS Data Engineer Associate (Semanas 53-65)

### Mes 13 — Servicios de datos AWS (parte 1)

**Semana 53 — S3 avanzado**
- 📘 Lifecycle policies, versioning, replication, encryption (SSE-S3, SSE-KMS)
- 📘 S3 Select, Glacier tiers, Intelligent-Tiering
- 📘 Particionamiento Hive-style
- 🛠 Implementar lifecycle bronze→silver→gold→archive

**Semana 54 — AWS Glue (parte 1)**
- 📘 Glue Data Catalog, crawlers, classifiers
- 📘 Glue Jobs (PySpark/Python shell), bookmarks
- 🛠 Crawler sobre S3 + job de transformación

**Semana 55 — AWS Glue (parte 2) + Athena**
- 📘 Glue Workflows, triggers, Glue Studio (visual ETL)
- 📘 Athena: queries, particionamiento, CTAS, workgroups
- 🛠 Pipeline: Glue ETL → Athena query → resultados a S3

**Semana 56 — Lake Formation**
- 📘 Lake Formation: permisos finos, blueprints, governed tables
- 📘 Tag-based access control
- 🛠 Configurar Lake Formation sobre Data Catalog existente

### Mes 14 — Servicios de datos AWS (parte 2)

**Semana 57 — Amazon Redshift**
- 📘 Arquitectura MPP, leader/compute nodes, distribution styles
- 📘 Sort keys, compression encodings, COPY command
- 📘 Redshift Spectrum (queries sobre S3)
- 🛠 Crear cluster Redshift Serverless + cargar datos

**Semana 58 — EMR + DMS**
- 📘 EMR: clusters Spark/Hadoop, EMR Serverless
- 📘 DMS: full load, CDC, replicación
- 🛠 EMR Serverless job con PySpark

**Semana 59 — Step Functions + MWAA**
- 📘 Step Functions: state machines, ASL, integraciones nativas
- 📘 MWAA (Airflow gestionado)
- 🛠 Orquestar Glue + Lambda con Step Functions

**Semana 60 — Kinesis intro**
- 📘 Kinesis Data Streams: shards, producers, consumers
- 📘 Kinesis Firehose, Kinesis Analytics
- 🛠 Producer Python → Stream → Firehose → S3

### Mes 15 — Repaso + cert DEA-C01

**Semana 61 — Proyecto 9: Data Lake AWS (parte 1)**
- 🛠 **Proyecto 9: Data Lake completo AWS**
  - Ingesta S3 raw → Glue ETL bronze
  - Crawler + Catalog

**Semana 62 — Proyecto 9 (parte 2)**
- 🛠 Silver/gold layers + Athena queries
- 🛠 Dashboard QuickSight
- 🛠 Step Functions orquestando todo

**Semana 63 — Repaso DEA-C01 (parte 1)**
- 🧪 TutorialsDojo Practice Test 1-3
- 📘 Whitepapers: Data Analytics Lens, Modern Data Architecture

**Semana 64 — Repaso DEA-C01 (parte 2)**
- 🧪 TutorialsDojo Practice Test 4-6
- 📘 Cheat sheet final + áreas débiles

**Semana 65 — Examen DEA-C01**
- ✅ **🎓 EXAMEN: AWS Data Engineer Associate**
- ✍️ Logro en LinkedIn + agregar a CV

---

## Q6 · Streaming, dbt y CI/CD (Semanas 66-78)

### Mes 16 — Streaming

**Semana 66 — Kafka fundamentos**
- 📘 Topics, partitions, offsets, brokers, ZooKeeper/KRaft
- 📘 Producers, consumers, consumer groups
- 🛠 Kafka local con Docker, primer producer/consumer Python

**Semana 67 — Kafka avanzado**
- 📘 Replication, ISR, exactly-once semantics
- 📘 Schema Registry (Avro), Kafka Connect (intro)
- 🛠 Producer con Avro + Schema Registry

**Semana 68 — Spark Structured Streaming**
- 📘 Streaming DataFrames, output modes, triggers
- 📘 Windows (tumbling, sliding, session), watermarks
- 🛠 Kafka → Spark Streaming → Parquet

**Semana 69 — CDC + patrones**
- 📘 Change Data Capture: Debezium, AWS DMS CDC
- 📘 Event sourcing, outbox pattern
- 🛠 CDC de Postgres → Kafka → S3

### Mes 17 — dbt + Data Quality

**Semana 70 — dbt fundamentos**
- 📘 dbt Core install, project structure, profiles
- 📘 Models, sources, refs, seeds, snapshots
- 📘 Materializations: view, table, incremental, ephemeral
- 🛠 Primer proyecto dbt sobre Postgres

**Semana 71 — dbt avanzado**
- 📘 Macros, Jinja, packages (dbt_utils)
- 📘 Tests (generic + singular), documentation, lineage
- 📘 dbt + Snowflake/BigQuery/Databricks (overview)
- 🛠 Refactorizar SQL del Proyecto 4 a dbt

**Semana 72 — Data Quality**
- 📘 Great Expectations: expectations, suites, checkpoints
- 📘 Data contracts (intro)
- 🛠 Implementar GE en pipeline existente

**Semana 73 — Observabilidad**
- 📘 Metrics, logs, traces para data pipelines
- 📘 Datadog/Grafana intro, OpenTelemetry
- 🛠 Dashboard Grafana con métricas de Airflow

### Mes 18 — CI/CD + IaC

**Semana 74 — Terraform fundamentos**
- 📘 Providers, resources, variables, outputs, state
- 📘 Workspaces, modules, backends remotos (S3)
- 🛠 Crear S3 + Glue + IAM con Terraform

**Semana 75 — Terraform avanzado**
- 📘 Módulos reutilizables, data sources, count/for_each
- 📘 Terragrunt (intro)
- 🛠 Modularizar infra del Data Lake

**Semana 76 — GitHub Actions + testing**
- 📘 Workflows, jobs, steps, secrets, matrix builds
- 📘 pytest para PySpark, sqlfluff, black, ruff
- 🛠 CI/CD para deploy de Glue jobs y dbt

**Semana 77 — Proyecto 10 (parte 1)**
- 🛠 **Proyecto 10: Pipeline streaming end-to-end**
  - Diseño + Terraform (Kinesis, S3, Glue, IAM)
  - Producer Python → Kinesis

**Semana 78 — Proyecto 10 (parte 2) + cierre Q6**
- 🛠 Spark Structured Streaming → Delta en S3
- 🛠 dbt para gold layer + tests
- 🛠 CI/CD con GitHub Actions
- ✍️ Blog post + diagrama arquitectura
- ✅ **Checkpoint Q6**

---

## Q7 · Databricks Data Engineer Associate (Semanas 79-91)

### Mes 19 — Databricks Lakehouse fundamentos

**Semana 79 — Databricks intro**
- 📘 Lakehouse paradigm, control plane vs data plane
- 📘 Crear cuenta Community Edition (gratis) o trial 14 días
- 📘 Workspace tour: notebooks, clusters, repos
- 🛠 Primer notebook PySpark + SQL

**Semana 80 — Clusters + Notebooks**
- 📘 All-purpose vs job clusters, pools, runtimes (DBR)
- 📘 Notebooks multi-lenguaje (%python, %sql, %scala)
- 📘 DBFS, mounts a S3
- 🛠 Cluster custom + montar bucket S3

**Semana 81 — Databricks Repos + Workflows básico**
- 📘 Integración Git (GitHub/Azure DevOps)
- 📘 Workflows: jobs, tasks, schedules, retries
- 🛠 Sync repo + job programado diario

**Semana 82 — Auto Loader + ingesta**
- 📘 Auto Loader (cloudFiles), schema inference/evolution
- 📘 COPY INTO, INSERT, MERGE
- 🛠 Ingesta incremental desde S3 con Auto Loader

### Mes 20 — Delta Lake + Unity Catalog

**Semana 83 — Delta Lake fundamentos**
- 📘 ACID transactions, transaction log, time travel
- 📘 Schema evolution, schema enforcement
- 🛠 CRUD en tabla Delta + time travel queries

**Semana 84 — Delta Lake optimización**
- 📘 OPTIMIZE, Z-ORDER, VACUUM, file compaction
- 📘 Liquid clustering, deletion vectors
- 🛠 Benchmark con/sin Z-ORDER

**Semana 85 — Delta Live Tables (DLT)**
- 📘 Pipelines declarativos, expectations
- 📘 Streaming vs batch tables, materialized views
- 🛠 DLT pipeline bronze→silver→gold con expectations

**Semana 86 — Unity Catalog**
- 📘 Metastore, catalogs, schemas, tables
- 📘 Permisos (GRANT/REVOKE), lineage, external locations
- 📘 Databricks SQL warehouses + dashboards
- 🛠 Configurar UC + asignar permisos por grupo

### Mes 21 — Repaso + cert Databricks Associate

**Semana 87 — Proyecto 11 (parte 1)**
- 🛠 **Proyecto 11: Lakehouse end-to-end Databricks**
  - Auto Loader ingesta → DLT bronze/silver/gold
  - Unity Catalog setup

**Semana 88 — Proyecto 11 (parte 2)**
- 🛠 Databricks SQL dashboard
- 🛠 Workflows orquestando + alertas
- ✍️ README + diagrama

**Semana 89 — Repaso Databricks DE Associate (parte 1)**
- 📘 [Databricks Academy - DE Learning Plan](https://www.databricks.com/learn/training/data-engineer)
- 🧪 Practice exams (Derar Alhussein / Udemy)

**Semana 90 — Repaso Databricks DE Associate (parte 2)**
- 🧪 Más simuladores + áreas débiles
- 📘 Cheat sheet Delta Lake + DLT + UC

**Semana 91 — Examen Databricks Associate**
- ✅ **🎓 EXAMEN: Databricks Certified Data Engineer Associate**
- ✍️ Compartir logro

---

## Q8 · Databricks Professional + Empleo (Semanas 92-104)

### Mes 22 — Databricks avanzado + MLOps básico

**Semana 92 — Performance + Photon**
- 📘 Photon engine, file sizing, partitioning avanzado
- 📘 Spark UI debugging, query profiling
- 🛠 Optimizar pipeline existente y medir mejoras

**Semana 93 — Streaming avanzado en Databricks**
- 📘 Structured Streaming + Delta sinks
- 📘 Watermarks, stateful operations, checkpoint management
- 🛠 Pipeline streaming Delta con dedupe y late data

**Semana 94 — Asset Bundles + CI/CD Databricks**
- 📘 Databricks Asset Bundles (DAB), `databricks.yml`
- 📘 Deploy con GitHub Actions a múltiples envs (dev/staging/prod)
- 🛠 DAB para Proyecto 11

**Semana 95 — MLflow + Feature Store (intro)**
- 📘 MLflow tracking, models, registry
- 📘 Feature Store, vector search (overview)
- 🛠 Trackear un modelo simple con MLflow

### Mes 23 — Capstone + cert Professional

**Semana 96 — Capstone: diseño**
- 🛠 **Proyecto 12: Capstone end-to-end**
  - Definir dominio (ej. real-time analytics de GitHub Archive, Spotify, NYC TLC)
  - Diseño de arquitectura + diagrama
  - Setup repo + Terraform

**Semana 97 — Capstone: ingesta + bronze**
- 🛠 Streaming Kafka/Kinesis → Auto Loader → Delta bronze
- 🛠 Unity Catalog + permisos

**Semana 98 — Capstone: silver + gold**
- 🛠 DLT pipelines silver/gold con expectations
- 🛠 dbt para modelos gold (opcional)
- 🛠 Databricks SQL dashboards

**Semana 99 — Capstone: CI/CD + monitoring**
- 🛠 DAB + GitHub Actions
- 🛠 Alertas, observability, cost monitoring
- ✍️ Case study completo (problema, arquitectura, decisiones, resultados)

**Semana 100 — Repaso Databricks Professional**
- 📘 Streaming avanzado, performance tuning, security
- 🧪 Practice exams Professional

**Semana 101 — Examen Databricks Professional**
- ✅ **🎓 EXAMEN: Databricks Certified Data Engineer Professional**

### Mes 24 — Búsqueda de empleo

**Semana 102 — CV + LinkedIn + GitHub**
- ✍️ CV 1 página optimizado ATS (skills, certs, proyectos al top)
- ✍️ LinkedIn: headline, about con storytelling, featured posts
- ✍️ GitHub: pinear 5 mejores repos, perfil README

**Semana 103 — Preparación entrevistas**
- 🧪 SQL: 30 ejercicios medium/hard (LeetCode/StrataScratch)
- 🧪 PySpark: 10 ejercicios de transformación/optimización
- 📘 System design: 3-5 casos (real-time pipeline, batch DWH, lakehouse)
- 📘 Preparar 5-7 historias STAR (behavioral)

**Semana 104 — Aplicaciones + networking 🚀**
- ✍️ 30+ aplicaciones (LinkedIn, Indeed, careers pages, consultoras, YC)
- 🤝 Networking: meetups, mensajes a recruiters/DEs en LinkedIn
- 📅 Agendar mock interviews (Pramp, peers)
- ✅ **🎯 META FINAL: oferta de trabajo como Data Engineer**

---

## 📊 Resumen de hitos

| Semana | Hito |
|--------|------|
| 13 | ✅ Q1: Python + Linux + Git + 3 proyectos |
| 26 | ✅ Q2: SQL avanzado + DWH dimensional |
| 39 | 🎓 **AWS Cloud Practitioner** |
| 52 | ✅ Q4: Pipeline ETL batch dockerizado |
| 65 | 🎓 **AWS Data Engineer Associate** |
| 78 | ✅ Q6: Pipeline streaming + IaC + CI/CD |
| 91 | 🎓 **Databricks DE Associate** |
| 101 | 🎓 **Databricks DE Professional** |
| 104 | 🎯 **Primer empleo como Data Engineer** |

---

## 💡 Reglas de oro semanales

1. **Mínimo 5 commits/semana** en GitHub (regla del verde 🟢).
2. **1 post/mes** en LinkedIn desde semana 27.
3. **Revisar el roadmap cada domingo** (15 min) y planear la semana.
4. **No saltar semanas**: si te atrasas, alarga el trimestre 1-2 semanas en lugar de brincar.
5. **Cada proyecto necesita README + diagrama + tests**, no excepciones.
6. **Descanso planeado:** 1 semana off cada 3 meses para evitar burnout (no contada en las 104).

---

**Última actualización:** 2026-06-25
**Versión:** 1.0 — semanal
