import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Subject from "App/Models/Subject";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Subject.createMany([
      {
        ras_id: "0001",
        ras_nombre_asunto: "ACTAS DE POSESIÓN",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0002",
        ras_nombre_asunto: "ACTAS DE GRUPO PRIMARIO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0003",
        ras_nombre_asunto: "INFORMES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0004",
        ras_nombre_asunto: "COMUNICACIONES  OFICIALES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0013",
        ras_nombre_asunto: "RESOLUCIONES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0019",
        ras_nombre_asunto: "SOLICITUDES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0025",
        ras_nombre_asunto: "MANUALES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0026",
        ras_nombre_asunto: "PLAN DE ACCIÓN",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0027",
        ras_nombre_asunto: "PROCEDIMIENTOS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0031",
        ras_nombre_asunto: "CIRCULARES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0033",
        ras_nombre_asunto: "CONTRATOS DE PRESTACION DE SERVICIOS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0034",
        ras_nombre_asunto: "INFORMES CONTABLE",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0035",
        ras_nombre_asunto: "LIBROS CONTABLES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0037",
        ras_nombre_asunto: "HISTORIAS LABORALES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0039",
        ras_nombre_asunto: "RECURSO DE REPOSICIÓN",
        ras_tiempo_respuesta: 60,
        ras_unidad: "Días",
      },
      {
        ras_id: "0040",
        ras_nombre_asunto: "COMPROBANTES DE EGRESOS",
        ras_tiempo_respuesta: 30,
        ras_unidad: "Días",
      },
      {
        ras_id: "0041",
        ras_nombre_asunto: "ACTAS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0043",
        ras_nombre_asunto: "EXTRACTOS BANCARIOS",
        ras_tiempo_respuesta: 1,
        ras_unidad: "Días",
      },
      {
        ras_id: "0044",
        ras_nombre_asunto: "CONTRATO DE FIDUCIA O ENCARGO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0045",
        ras_nombre_asunto: "PRESUPUESTO PARTICIPATIVO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0046",
        ras_nombre_asunto: "FONDO MEDELLÍN EPM",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0047",
        ras_nombre_asunto: "FONDO MEJORES BACHILLERES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0048",
        ras_nombre_asunto: "FONDO ENLAZA MUNDOS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0049",
        ras_nombre_asunto: "FONDO FORMACIÓN AVANZADA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "005",
        ras_nombre_asunto: "CONTRATO DE INTERVENTORIA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0050",
        ras_nombre_asunto: "EXTENDIENDO FRONTERAS EDUCATIVAS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "0063",
        ras_nombre_asunto: "CONTRATO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "054",
        ras_nombre_asunto: "CONTRATO INTERADMINISTRATIVO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "055",
        ras_nombre_asunto: "BECAS TECNOLOGÍAS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "056",
        ras_nombre_asunto: "FONDO EXTENDIENDO FRONTERAS EDUCATIVAS",
        ras_tiempo_respuesta: 20,
        ras_unidad: "Días",
      },
      {
        ras_id: "062",
        ras_nombre_asunto: "REVOCATORIA DE RESOLUCIÓN",
        ras_tiempo_respuesta: 60,
        ras_unidad: "Días",
      },
      {
        ras_id: "063",
        ras_nombre_asunto: "COMUNICACIÓN INTERNA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "064",
        ras_nombre_asunto: "COMUNICACIÓN EXTERNA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "066",
        ras_nombre_asunto: "AUTORIZACIÓN",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "067",
        ras_nombre_asunto: "FACTURA IES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "068",
        ras_nombre_asunto: "ACTAS DE CONSEJO DIRECTIVO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "069",
        ras_nombre_asunto: "COMUNICACION RECIBIDA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "071",
        ras_nombre_asunto: "CONVENIO NTERADMINISTRATIVO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "072",
        ras_nombre_asunto: "ORDEN DE COMPRA",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "073",
        ras_nombre_asunto: "ACUERDO DE VOLUNTADES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "074",
        ras_nombre_asunto: "CERTIFICADO REGISTRO PRESUPUESTAL",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "075",
        ras_nombre_asunto: "ESTADOS FINANCIEROS",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "077",
        ras_nombre_asunto: "MEMORANDO DE ENTENDIMIENTO",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "078",
        ras_nombre_asunto: "PQRSDF",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
      {
        ras_id: "100.02.21",
        ras_nombre_asunto: "ACTAS DE GRUPO DIRECTIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.03.02",
        ras_nombre_asunto: "RESOLUCIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.05.00",
        ras_nombre_asunto:
          "BOLETINES OBSERVATORIO DE EDUCACIÓN SUPERIOR DE MEDELLÍN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.06.00",
        ras_nombre_asunto: "CIRCULARES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.16.00",
        ras_nombre_asunto:
          "ESTUDIOS ESTADÍSTICOS OBSERVATORIO DE EDUCACIÓN SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.19.02",
        ras_nombre_asunto:
          "INFORMES DE AUDIENCIA PÚBLICA DE RENDICIÓN DE CUENTAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.19.08",
        ras_nombre_asunto: "INFORMES DE GESTIÓN INSTITUCIONAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.21.04",
        ras_nombre_asunto: "INSTRUMENTOS DE CONTROL GESTIÓN DE COMUNICACIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.04",
        ras_nombre_asunto: "MANUALES DE GESTIÓN DEL RIESGO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.05",
        ras_nombre_asunto: "MANUALES DE IDENTIDAD CORPORATIVA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.06",
        ras_nombre_asunto:
          "MANUALES DE LA METODOLOGÍA DE ASIGNACIÓN DE PERTINENCIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.07",
        ras_nombre_asunto: "MANUALES DE PROCEDIMIENTOS DEL BANCO DE PROYECTOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.11",
        ras_nombre_asunto:
          "MANUALES PARA EL MANEJO DE LA BATERIA DE INDICADORES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.25.12",
        ras_nombre_asunto: "MANUALES PARA EL MODELO PREDICTIVO DE DESERCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.01",
        ras_nombre_asunto: "PLANES ANTICORRUPCIÓN Y  DE ATENCIÓN AL CIUDADANO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.05",
        ras_nombre_asunto: "PLANES DE ACCION INSTITUCIONALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.07",
        ras_nombre_asunto:
          "PLANES DE AUDITORIAS AL SISTEMA DE GESTION INTEGRAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.08",
        ras_nombre_asunto: "PLANES DE COMUNICACIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.09",
        ras_nombre_asunto: "PLANES DE GESTIÓN DEL RIESGO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.12",
        ras_nombre_asunto: "PLANES DE SEGUIMIENTO MIPG",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.17",
        ras_nombre_asunto: "PLANES ESTRATEGICOS INSTITUCIONALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.28.18",
        ras_nombre_asunto: "PLANES INDICATIVOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.30.00",
        ras_nombre_asunto: "PROCESOS DEL SISTEMA DE GESTIÓN INTEGRAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.32.02",
        ras_nombre_asunto:
          "PROGRAMAS ANUALES DE AUDITORIAS DEL SISTEMA DE GESTION INTEGRAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.33.00",
        ras_nombre_asunto: "PROYECTOS DE INVERSION PÚBLICA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "100.34.00",
        ras_nombre_asunto: "REPORTE DE AVANCE A LA GESTIÓN - FURAG",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.02.05",
        ras_nombre_asunto: "ACTAS DE COMITE DE CONCILIACIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.02.19",
        ras_nombre_asunto: "ACTAS DE CONSEJO DIRECTIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.03.01",
        ras_nombre_asunto: "ACUERDOS DE CONSEJO DIRECTIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.08.00",
        ras_nombre_asunto: "CONCEPTOS JURÍDICOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.19.07",
        ras_nombre_asunto: "INFORMES DE GESTIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.28.04",
        ras_nombre_asunto: "PLANES DE ACCIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.31.01",
        ras_nombre_asunto: "PROCESOS CONTENCIOSOS ADMINISTRATIVOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "110.31.02",
        ras_nombre_asunto: "PROCESOS DISCIPLINARIOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.02.08",
        ras_nombre_asunto:
          "ACTAS DE COMITE DE COORDINACIÓN DEL SISTEMA DE CONTROL INTERNO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.01",
        ras_nombre_asunto: "INFORMES A ENTES DE CONTROL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.03",
        ras_nombre_asunto: "INFORMES DE AUSTERIDAD EN EL GASTO PÚBLICO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.06",
        ras_nombre_asunto:
          "INFORMES DE EVALUACION DEL MODELO INTEGRADO DE PLANEACIÓN Y GESTIÓN (MIPG)",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.07",
        ras_nombre_asunto: "INFORMES DE GESTIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.10",
        ras_nombre_asunto: "INFORMES DE SEGUIMIENTO A PQRSDF",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.11",
        ras_nombre_asunto: "INFORMES DE SEGUIMIENTO AL MAPA DE RIESGOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.12",
        ras_nombre_asunto:
          "INFORMES DE SEGUIMIENTO AL PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.19.13",
        ras_nombre_asunto:
          "INFORMES PORMENORIZADO DEL ESTADO DE CONTROL INTERNO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.28.04",
        ras_nombre_asunto: "PLANES DE ACCIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.28.06",
        ras_nombre_asunto: "PLANES DE AUDITORIAS DE CONTROL INTERNO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.28.10",
        ras_nombre_asunto: "PLANES DE MEJORAMIENTO INSTITUCIONAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "120.32.01",
        ras_nombre_asunto: "PROGRAMAS ANUALES DE AUDITORIAS DE CONTROL INTERNO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.01",
        ras_nombre_asunto:
          "ACTAS DE COMITE ANTITRAMITES Y DE GOBIERNO EN LINEA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.02",
        ras_nombre_asunto:
          "ACTAS DE COMITE ARTICULADOR DE PRESUPUESTO PARTICIPATIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.03",
        ras_nombre_asunto: "ACTAS DE COMITE DE BIENES MUEBLES E INMUEBLES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.04",
        ras_nombre_asunto: "ACTAS DE COMITE DE CARTERA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.06",
        ras_nombre_asunto: "ACTAS DE COMITE DE CONTRATACIÓN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.07",
        ras_nombre_asunto: "ACTAS DE COMITE DE CONVIVENCIA LABORAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.09",
        ras_nombre_asunto: "ACTAS DE COMITE DE INVERSIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.10",
        ras_nombre_asunto:
          "ACTAS DE COMITE INSTITUCIONAL DE GESTION Y DESEMPEÑO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.11",
        ras_nombre_asunto: "ACTAS DE COMITE INTERNO DE ARCHIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.12",
        ras_nombre_asunto: "ACTAS COMITE FORMACION AVANZADA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.13",
        ras_nombre_asunto:
          "ACTAS DE COMITE CASOS ESPECIALES DEL FONDO MEDELLIN EPM",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.14",
        ras_nombre_asunto:
          "ACTAS DE COMITE PARITARIO DE SEGURIDAD Y SALUD EN EL TRABAJO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.15",
        ras_nombre_asunto:
          "ACTAS DE COMITE TECNICO ASESOR DEL PROGRAMA EXTENDIENDO FRONTERAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.17",
        ras_nombre_asunto:
          "ACTAS DE COMITE TECNICO ASESOR PROGRAMA MEJORES BACHILLERES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.18",
        ras_nombre_asunto: "ACTAS DE COMITE TECNICO DE SOSTENIBILIDAD CONTABLE",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.20",
        ras_nombre_asunto: "ACTAS DE ELIMINACION DOCUMENTAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.22",
        ras_nombre_asunto: "ACTAS DE LA JUNTA ADMINISTRADORA DE ENLAZA MUNDOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.23",
        ras_nombre_asunto:
          "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO CAMINO A LA EDUCACION SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.02.24",
        ras_nombre_asunto: "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO COMUNA 1",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.04.00",
        ras_nombre_asunto: "ANTEPROYECTOS DE PRESUPUESTO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.07.01",
        ras_nombre_asunto: "COMPROBANTES CONTABLES DE AJUSTES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.07.02",
        ras_nombre_asunto: "COMPROBANTES CONTABLES DE EGRESO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.07.03",
        ras_nombre_asunto: "COMPROBANTES CONTABLES DE INGRESO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.09.00",
        ras_nombre_asunto: "CONCILIACIONES BANCARIAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.10.01",
        ras_nombre_asunto: "CONSECUTIVO DE COMUNICACIONES OFICIALES EXTERNAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.10.02",
        ras_nombre_asunto: "CONSECUTIVO DE COMUNICACIONES OFICIALES INTERNAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.10.03",
        ras_nombre_asunto: "CONSECUTIVO DE COMUNICACIONES OFICIALES RECIBIDAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.01",
        ras_nombre_asunto: "CARTAS DE INTENCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.02",
        ras_nombre_asunto: "CONTRATOS DE ARRENDAMIENTO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.03",
        ras_nombre_asunto: "CONTRATOS DE COMODATO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.04",
        ras_nombre_asunto: "CONTRATOS DE COMPRAVENTA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.05",
        ras_nombre_asunto: "CONTRATOS DE CONSULTORIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.06",
        ras_nombre_asunto: "CONTRATOS DE FIDUCIA O ENCARGO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.07",
        ras_nombre_asunto: "CONTRATOS DE INTERVENTORIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.08",
        ras_nombre_asunto: "CONTRATOS DE OBRA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.09",
        ras_nombre_asunto: "CONTRATOS DE PRESTACION DE SERVICIOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.10",
        ras_nombre_asunto: "CONTRATOS DE SUMINISTROS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.11",
        ras_nombre_asunto: "MEMORANDOS DE ENTENDIMIENTO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.11.12",
        ras_nombre_asunto: "ORDENES DE COMPRA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.12.01",
        ras_nombre_asunto: "CONVENIOS DE ASOCIACION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.12.02",
        ras_nombre_asunto: "CONVENIOS INTERADMINISTRATIVOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.01",
        ras_nombre_asunto:
          "DECLARACIONES DE CONTRIBUCION ESPECIAL OBRA PUBLICA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.02",
        ras_nombre_asunto: "DECLARACIONES DE ESTAMPILLA PROCULTURA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.03",
        ras_nombre_asunto: "DECLARACIONES DE INGRESOS Y PATRIMONIOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.04",
        ras_nombre_asunto: "DECLARACIONES DE RETENCION DE ICA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.05",
        ras_nombre_asunto: "DECLARACIONES DE RETENCION EN LA FUENTE POR RENTA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.06",
        ras_nombre_asunto: "REPORTE DE INFORMACION EXOGENA DIAN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.14.07",
        ras_nombre_asunto:
          "REPORTE DE INFORMACION EXOGENA MUNICIPIO DE MEDELLIN - RETENCION DE ICA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.15.00",
        ras_nombre_asunto: "ESTADOS FINANCIEROS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.17.00",
        ras_nombre_asunto: "HISTORIALES DE EQUIPOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.01",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS BECAS MEJORES BACHILLERES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.02",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS BECAS MEJORES DEPORTISTAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.04",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO PRESUPUESTO PARTICIPATIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.05",
        ras_nombre_asunto: "HISTORIAS DE BENEFICIARIOS FONDO ENLAZA MUNDOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.06",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO EXTENDIENDO FRONTERAS EDUCATIVAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.07",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO FORMACION AVANZADA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.08",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO MEDELLIN EPM UNIVERSIDADES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.18.09",
        ras_nombre_asunto: "HISTORIAS LABORALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.19.04",
        ras_nombre_asunto: "INFORMES DE EJECUCION PRESUPUESTAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.19.05",
        ras_nombre_asunto:
          "INFORMES DE ENCUESTA DE SATISFACCION DE ATENCION AL CIUDADANO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.19.07",
        ras_nombre_asunto: "INFORMES DE GESTION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.19.09",
        ras_nombre_asunto: "INFORMES DE PQRSDF",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.20.01",
        ras_nombre_asunto:
          "BANCOS TERMINOLOGICOS DE SERIES Y SUBSERIES DOCUMENTALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.20.02",
        ras_nombre_asunto: "INVENTARIOS DOCUMENTALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.20.03",
        ras_nombre_asunto: "PLANES INSTITUCIONAL DE ARCHIVOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.20.04",
        ras_nombre_asunto: "PROGRAMAS DE GESTION DOCUMENTAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.20.05",
        ras_nombre_asunto: "TABLAS DE RETENCION DOCUMENTAL",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.21.01",
        ras_nombre_asunto: "INSTRUMENTOS DE CONTROL DE TRANSPORTE",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.21.02",
        ras_nombre_asunto: "INSTRUMENTOS DE CONTROL DE VIGILANCIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.21.03",
        ras_nombre_asunto: "INSTRUMENTOS DE CONTROL DESCRIPCION Y CONSULTA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.21.05",
        ras_nombre_asunto: "INSTRUMENTOS DE CONTROL TIC",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.22.01",
        ras_nombre_asunto: "ESQUEMA DE PUBLICACION DE INFORMACION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.22.02",
        ras_nombre_asunto: "INDICE DE INFORMACION CLASIFICADA Y RESERVADA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.22.03",
        ras_nombre_asunto: "REGISTRO DE ACTIVOS DE INFORMACION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.23.00",
        ras_nombre_asunto: "INVENTARIOS DE BIENES MUEBLES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.24.01",
        ras_nombre_asunto: "LIBRO DIARIO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.24.02",
        ras_nombre_asunto: "LIBRO MAYOR DE BALANCE",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.01",
        ras_nombre_asunto: "MANUALES DE ATENCION AL CIUDADANO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.02",
        ras_nombre_asunto:
          "MANUALES DE CONTRATACION Y SUPERVISION E INTERVENTORIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.03",
        ras_nombre_asunto: "MANUALES DE EMERGENCIAS Y CONTINGENCIAS DEL SG-SST",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.08",
        ras_nombre_asunto: "MANUALES DE RECUPERACION DE CARTERA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.09",
        ras_nombre_asunto:
          "MANUALES DEL PROCESO ACCESO Y PERMANENCIA A LA EDUCACION SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.25.10",
        ras_nombre_asunto:
          "MANUALES ESPECIFICOS DE FUNCIONES Y COMPETENCIAS LABORALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.26.00",
        ras_nombre_asunto: "NOMINA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.27.00",
        ras_nombre_asunto:
          "PETICIONES, QUEJAS,RECLAMOS, SUGERENCIAS, DENUNCIAS Y FELICTACIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.02",
        ras_nombre_asunto: "PLANES ANUALES DE ADQUISICIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.03",
        ras_nombre_asunto: "PLANES ANUALES DE BIENESTAR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.04",
        ras_nombre_asunto: "PLANES DE ACCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.11",
        ras_nombre_asunto:
          "PLANES DE PREVENCION, PREPARACION Y RESPUESTA ANTE EMERGENCIAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.14",
        ras_nombre_asunto: "PLANES DE TRANSFERENCIAS DOCUMENTALES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.15",
        ras_nombre_asunto: "PLANES ESTRATEGICOS DE TALENTO HUMANO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.16",
        ras_nombre_asunto:
          "PLANES ESTRATEGICOS DE TECNOLOGIAS DE LA INFORMACION - PETIC",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.28.19",
        ras_nombre_asunto: "PLANES INSTITUCIONALES DE CAPACITACIONES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.29.00",
        ras_nombre_asunto:
          "PROCESOS CONTRACTUALES DECLARADOS DESIERTOS O NO ADJUDICADOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.32.03",
        ras_nombre_asunto: "PROGRAMAS ANUALES MENSUALIZADOS DE CAJA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.32.04",
        ras_nombre_asunto: "PROGRAMAS DE INDUCCION Y REINDUCCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.32.05",
        ras_nombre_asunto: "PROGRAMAS DE RESPALDO DE INFORMACION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "130.32.06",
        ras_nombre_asunto: "PROGRAMAS DE VIGILANCIA EPIDEMIOLOGICA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.02",
        ras_nombre_asunto:
          "ACTAS DE COMITE ARTICULADOR DE PRESUPUESTO PARTICIPATIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.12",
        ras_nombre_asunto: "ACTAS COMITE FORMACION AVANZADA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.13",
        ras_nombre_asunto:
          "ACTAS DE COMITE CASOS ESPECIALES DEL FONDO MEDELLIN EPM",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.15",
        ras_nombre_asunto:
          "ACTAS DE COMITE TECNICO ASESOR DEL PROGRAMA EXTENDIENDO FRONTERAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.16",
        ras_nombre_asunto:
          "ACTAS DE COMITE TECNICO ASESOR DEL PROYECTO BECAS TECNOLOGIAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.17",
        ras_nombre_asunto:
          "ACTAS DE COMITE TECNICO ASESOR PROGRAMA MEJORES BACHILLERES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.22",
        ras_nombre_asunto: "ACTAS DE LA JUNTA ADMINISTRADORA DE ENLAZA MUNDOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.23",
        ras_nombre_asunto:
          "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO CAMINO A LA EDUCACION SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.02.24",
        ras_nombre_asunto: "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO COMUNA 1",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.05.00",
        ras_nombre_asunto:
          "BOLETINES OBSERVATORIO DE EDUCACION SUPERIOR DE MEDELLIN",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.13.01",
        ras_nombre_asunto: "CONVOCATORIAS BECAS TECNOLOGIAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.13.02",
        ras_nombre_asunto:
          "CONVOCATORIAS RUTAS FORMATIVAS TALENTO ESPECIALIZADO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.16.00",
        ras_nombre_asunto:
          "ESTUDIOS ESTADISTICOS OBSERVATORIO DE EDUCACION SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.01",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS BECAS MEJORES BACHILLERES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.03",
        ras_nombre_asunto: "HISTORIAS DE BENEFICIARIOS BECAS TECNOLOGIAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.04",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO PRESUPUESTO PARTICIPATIVO",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.05",
        ras_nombre_asunto: "HISTORIAS DE BENEFICIARIOS FONDO ENLAZA MUNDOS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.06",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO EXTENDIENDO FRONTERAS EDUCATIVAS",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.07",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO FORMACION AVANZADA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.18.08",
        ras_nombre_asunto:
          "HISTORIAS DE BENEFICIARIOS FONDO MEDELLIN EPM UNIVERSIDADES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.19.07",
        ras_nombre_asunto: "INFORMES DE GESTION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.25.06",
        ras_nombre_asunto:
          "MANUALES DE LA METODOLOGIA DE ASIGNACION DE PERTINENCIA",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.25.09",
        ras_nombre_asunto:
          "MANUALES DEL PROCESO ACCESO Y PERMANENCIA A LA EDUCACION SUPERIOR",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.25.11",
        ras_nombre_asunto:
          "MANUALES PARA EL MANEJO DE LA BATERIA DE INDICADORES",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.25.12",
        ras_nombre_asunto: "MANUALES PARA EL MODELO PREDICTIVO DE DESERCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "140.28.04",
        ras_nombre_asunto: "PLANES DE ACCION",
        ras_tiempo_respuesta: 50,
        ras_unidad: "Minutos",
      },
      {
        ras_id: "18",
        ras_nombre_asunto: "REGISTROS DE OPERACIONES",
        ras_tiempo_respuesta: 15,
        ras_unidad: "Días",
      },
    ]);
  }
}
