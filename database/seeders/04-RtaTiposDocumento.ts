import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectDocumentType from "App/Models/SubjectDocumentType";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await SubjectDocumentType.createMany([
      {
        rta_id: 1,
        rta_descripcion: "ACCIONES CORRECTIVAS",
      },
      {
        rta_id: 2,
        rta_descripcion: "ACEPTACION DE LA OFERTA",
      },
      {
        rta_id: 3,
        rta_descripcion: "ACEPTACION DONACION EQUIPOS",
      },
      {
        rta_id: 4,
        rta_descripcion: "ACTA CAMBIO DE SUPERVISION",
      },
      {
        rta_id: 5,
        rta_descripcion: "ACTA COMITE EVALUADOR",
      },
      {
        rta_id: 6,
        rta_descripcion: "ACTA COMITE INSTITUCIONAL DE GESTION Y DESEMPEÑO",
      },
      {
        rta_id: 7,
        rta_descripcion: "ACTA CONSEJO DIRECTIVO",
      },
      {
        rta_id: 8,
        rta_descripcion: "ACTA DE ACLARACION DISTRIBUCION DE RIESGOS",
      },
      {
        rta_id: 9,
        rta_descripcion: "ACTA DE ADJUDICACION",
      },
      {
        rta_id: 10,
        rta_descripcion: "ACTA DE APERTURA DE AUDITORIA",
      },
      {
        rta_id: 11,
        rta_descripcion: "ACTA DE APETURA PROPUESTAS",
      },
      {
        rta_id: 12,
        rta_descripcion: "ACTA DE APROBACION DE GARANTIAS",
      },
      {
        rta_id: 13,
        rta_descripcion: "ACTA DE AUDIENCIA",
      },
      {
        rta_id: 14,
        rta_descripcion: "ACTA DE AUDIENCIA DE ACLARACION DE PLIEGOS",
      },
      {
        rta_id: 15,
        rta_descripcion: "ACTA DE AUDIENCIA DE ADJUDICACION",
      },
      {
        rta_id: 16,
        rta_descripcion: "ACTA DE CIERRE DE EXPEDIENTE",
      },
      {
        rta_id: 17,
        rta_descripcion: "ACTA DE CIERRE DEL PROCESO Y APERTURA DE PROPUESTAS",
      },
      {
        rta_id: 18,
        rta_descripcion: "ACTA DE CIERRE DEL PROCESO Y RECEPCION DE PROPUESTAS",
      },
      {
        rta_id: 19,
        rta_descripcion: "ACTA DE COMPROMISO",
      },
      {
        rta_id: 20,
        rta_descripcion: "ACTA DE COMPROMISO DE PRESTACION DE SERVICIO SOCIAL",
      },
      {
        rta_id: 21,
        rta_descripcion: "ACTA DE ENTREGA A O RESTITUCION DEL BIEN",
      },
      {
        rta_id: 22,
        rta_descripcion: "ACTA DE GRADO",
      },
      {
        rta_id: 23,
        rta_descripcion: "ACTA DE GRADO DEL TITULO OBTENIDO",
      },
      {
        rta_id: 24,
        rta_descripcion: "ACTA DE GRADO O DIPLOMA DEL TITULO OBTENIDO",
      },
      {
        rta_id: 25,
        rta_descripcion: "ACTA DE INICIO",
      },
      {
        rta_id: 26,
        rta_descripcion: "ACTA DE LIQUIDACION",
      },
      {
        rta_id: 27,
        rta_descripcion: "ACTA DE POSESION",
      },
      {
        rta_id: 28,
        rta_descripcion: "ACTA DE RECIBO",
      },
      {
        rta_id: 29,
        rta_descripcion: "ACTA DE REUNION INFORME DE AUDITORIA",
      },
      {
        rta_id: 30,
        rta_descripcion: "ACTA DE TERMINACION",
      },
      {
        rta_id: 31,
        rta_descripcion: "ACTA DE TRANSFERENCIA",
      },
      {
        rta_id: 32,
        rta_descripcion: "ACTA DE VISITA",
      },
      {
        rta_id: 33,
        rta_descripcion: "ACTA DE VISITA OBRA",
      },
      {
        rta_id: 34,
        rta_descripcion: "ACTA F-AP-GA-007",
      },
      {
        rta_id: 35,
        rta_descripcion: "ACTA O DIPLOMA DE GRADO DEL ESTUDIANTE",
      },
      {
        rta_id: 36,
        rta_descripcion: "ACTAS COMITÉ DE CARTERA",
      },
      {
        rta_id: 37,
        rta_descripcion: "ACTAS COMITÉ DE CONTRATACION",
      },
      {
        rta_id: 38,
        rta_descripcion: "ACTAS COMITÉ SISTEMA INTEGRADO DE GESTION",
      },
      {
        rta_id: 39,
        rta_descripcion: "ACTAS DE CASOS ESPECIALES",
      },
      {
        rta_id: 40,
        rta_descripcion: "ACTAS DE COMITE ANTITRAMITES Y DE GOBIERNO EN LINEA",
      },
      {
        rta_id: 41,
        rta_descripcion: "ACTAS DE COMITE DE ARCHIVO",
      },
      {
        rta_id: 42,
        rta_descripcion: "ACTAS DE COMITE DE COORDINACION",
      },
      {
        rta_id: 43,
        rta_descripcion: "ACTAS DE COMITE PARITARIO DE SEGURIDAD Y SST",
      },
      {
        rta_id: 44,
        rta_descripcion:
          "ACTAS DE COMITE TECNICO ASESOR DEL PROGRAMA EXTENDIENDO FRONTERAS",
      },
      {
        rta_id: 45,
        rta_descripcion:
          "ACTAS DE COMITE TECNICO ASESOR DEL PROYECTO BECAS TECNOLOGIAS",
      },
      {
        rta_id: 46,
        rta_descripcion:
          "ACTAS DE COMITE TECNICO ASESOR PROGRAMA MEJORES BACHILLERES",
      },
      {
        rta_id: 47,
        rta_descripcion: "ACTAS DE COMITE TECNICO DE SOSTENIBILIDAD CONTABLE",
      },
      {
        rta_id: 48,
        rta_descripcion: "ACTAS DE ELIMINACION DOCUMENTAL",
      },
      {
        rta_id: 49,
        rta_descripcion: "ACTAS DE GRUPO PRIMARIO",
      },
      {
        rta_id: 50,
        rta_descripcion: "ACTAS DE LA JUNTA ADMINISTRADORA DE ENLAZA MUNDOS",
      },
      {
        rta_id: 51,
        rta_descripcion: "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO CES",
      },
      {
        rta_id: 52,
        rta_descripcion: "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO COMUNA 1",
      },
      {
        rta_id: 53,
        rta_descripcion: "ACTAS DE LA JUNTA DE ADMINISTRACION FONDO PP",
      },
      {
        rta_id: 54,
        rta_descripcion: "ACTO ADMINISTRATIVO CONTRATACION DIRECTA",
      },
      {
        rta_id: 55,
        rta_descripcion: "ACTO ADMINISTRATIVO DE CONVALIDACION DE TRD",
      },
      {
        rta_id: 56,
        rta_descripcion: "ACTO ADMINISTRATIVO DE LEGALIZACION DEL CREDITO",
      },
      {
        rta_id: 57,
        rta_descripcion: "ACTO ADMINISTRATIVO DE NOMBRAMIENTO",
      },
      {
        rta_id: 58,
        rta_descripcion: "ACTO ADMINISTRATIVO DEFINITIVO",
      },
      {
        rta_id: 59,
        rta_descripcion: "ACTO JUSTIFICATORIO DE LA CONTRATACION DIRECTA",
      },
      {
        rta_id: 60,
        rta_descripcion: "ACTUALIZACION DE BIENES Y RENTA",
      },
      {
        rta_id: 61,
        rta_descripcion: "ACTUALIZACION DE DATOS",
      },
      {
        rta_id: 62,
        rta_descripcion: "ACTUALIZACION DE DATOS DEL BENEFICIARIO",
      },
      {
        rta_id: 63,
        rta_descripcion: "ACTUALIZACION DE DATOS DEL DEUDOR SOLIDARIO",
      },
      {
        rta_id: 64,
        rta_descripcion: "ACTUALIZACION DE DATOS PERSONALES. F-AP-GF-0113",
      },
      {
        rta_id: 65,
        rta_descripcion: "ACTUALIZACION DE HOJA DE VIDA",
      },
      {
        rta_id: 66,
        rta_descripcion: "ACUERDO",
      },
      {
        rta_id: 67,
        rta_descripcion: "ADENDAS",
      },
      {
        rta_id: 68,
        rta_descripcion: "ADICION 1 CDP",
      },
      {
        rta_id: 69,
        rta_descripcion: "ADICION 1 RP",
      },
      {
        rta_id: 70,
        rta_descripcion: "ADICION Y AMPLIACION",
      },
      {
        rta_id: 71,
        rta_descripcion: "ALCANCE",
      },
      {
        rta_id: 72,
        rta_descripcion: "ALEGATOS DE CONCLUSION",
      },
      {
        rta_id: 73,
        rta_descripcion: "ALEGATOS DE SEGUNDA INSTANCIA",
      },
      {
        rta_id: 74,
        rta_descripcion: "ALIVIOS TRIBUTARIOS",
      },
      {
        rta_id: 75,
        rta_descripcion: "AMPLIACION CONVENIO",
      },
      {
        rta_id: 76,
        rta_descripcion: "AMPLIACION DE INFORMACION",
      },
      {
        rta_id: 77,
        rta_descripcion: "AMPLIACION MATRICULA",
      },
      {
        rta_id: 78,
        rta_descripcion: "AMPLIACION POLIZA",
      },
      {
        rta_id: 79,
        rta_descripcion: "ANALISIS DEL SECTOR",
      },
      {
        rta_id: 80,
        rta_descripcion:
          "ANALISIS ESTADISTICO DE AUSENTISMO LABORAL POR CAUSA MEDICA",
      },
      {
        rta_id: 81,
        rta_descripcion:
          "ANEXO 1: DETALLE DE CONTRATO QUE GENERARON LA RETENCION POR CONCEPTO DE ESTAMPILLA",
      },
      {
        rta_id: 82,
        rta_descripcion: "ANEXO 1: DIAGNOSTICO",
      },
      {
        rta_id: 83,
        rta_descripcion: "ANEXO 1: FICHA TECNICA DEL PROYECTO",
      },
      {
        rta_id: 84,
        rta_descripcion:
          "ANEXO 2: DETALLE DE CONTRATOS QUE SE SUSCRIBIERON EN EL PERIODO",
      },
      {
        rta_id: 85,
        rta_descripcion: "ANEXO 2: INFORME DE PRESUPUESTO",
      },
      {
        rta_id: 86,
        rta_descripcion: "ANEXOS HOJA DE VIDA",
      },
      {
        rta_id: 87,
        rta_descripcion: "ANTECEDENTES ADMINISTRATIVOS",
      },
      {
        rta_id: 88,
        rta_descripcion: "ANTECEDENTES JUDICIALES",
      },
      {
        rta_id: 89,
        rta_descripcion: "ANTECEDENTES PROFESIONALES",
      },
      {
        rta_id: 90,
        rta_descripcion: "ANULACION",
      },
      {
        rta_id: 91,
        rta_descripcion: "APELACION",
      },
      {
        rta_id: 92,
        rta_descripcion: "APERTURA DE ESPACIOS",
      },
      {
        rta_id: 93,
        rta_descripcion: "APROBACION CESION CONTRATO",
      },
      {
        rta_id: 94,
        rta_descripcion: "APROBACION GARANTIA",
      },
      {
        rta_id: 95,
        rta_descripcion: "APROBACION POLIZA",
      },
      {
        rta_id: 96,
        rta_descripcion: "AUTO DE APERTURA DE INVESTIGACION DISCIPLINARIA",
      },
      {
        rta_id: 97,
        rta_descripcion: "AUTO DE INDAGACION PRELIMINAR",
      },
      {
        rta_id: 98,
        rta_descripcion: "AUTO INHIBITORIO",
      },
      {
        rta_id: 99,
        rta_descripcion: "AUTO INTERLOCUTORIO",
      },
      {
        rta_id: 100,
        rta_descripcion: "AUTODIAGNOSTICOS",
      },
      {
        rta_id: 101,
        rta_descripcion: "AUTORIZACION",
      },
      {
        rta_id: 102,
        rta_descripcion: "AUTORIZACION DE CAMBIO DE PROGRAMA O DE UNIVERSIDAD",
      },
      {
        rta_id: 103,
        rta_descripcion: "AUTORIZACION DE TRATAMIENTO DE DATOS",
      },
      {
        rta_id: 104,
        rta_descripcion: "AUTORIZACION PARA EL TRATAMIENTO DE DATOS PERSONALES",
      },
      {
        rta_id: 105,
        rta_descripcion:
          "AUTORIZACION PARA PUBLICACION DE TRABAJO DE GRADO (LO PUBLICA SECRETARIA DE EDUCACION)",
      },
      {
        rta_id: 106,
        rta_descripcion: "AUTORIZACION TRASLADO PRESUPUESTAL",
      },
      {
        rta_id: 107,
        rta_descripcion: "AUTORIZACION USO DE IMAGEN",
      },
      {
        rta_id: 108,
        rta_descripcion: "AUTORIZACION VISITA DE RIESGOS",
      },
      {
        rta_id: 109,
        rta_descripcion: "AVAL DE LAS IES A LA POSTULACION",
      },
      {
        rta_id: 110,
        rta_descripcion: "AVISO DE CONVOCATORIA PUBLICA",
      },
      {
        rta_id: 111,
        rta_descripcion: "BACKUP DE LOS SISTEMAS DE INFORMACION",
      },
      {
        rta_id: 112,
        rta_descripcion:
          "BANCO TERMINOLOGICO DE SERIES Y SUBSERIES DOCUMENTALES",
      },
      {
        rta_id: 113,
        rta_descripcion: "BASE DE DATOS",
      },
      {
        rta_id: 114,
        rta_descripcion: "BASE MAESTRA DE LA BATERIA DE INDICADORES",
      },
      {
        rta_id: 115,
        rta_descripcion: "BITACORA",
      },
      {
        rta_id: 116,
        rta_descripcion: "BITACORAS DE OBRA",
      },
      {
        rta_id: 117,
        rta_descripcion: "BOLETIN",
      },
      {
        rta_id: 118,
        rta_descripcion: "BOLETIN DEUDORES MOROSOS",
      },
      {
        rta_id: 119,
        rta_descripcion:
          "BOLETINES OBSERVATORIO DE EDUCACION SUPERIOR DE MEDELLIN",
      },
      {
        rta_id: 120,
        rta_descripcion: "BRIEF (SOLICITUD DE SERVICIO COMUNICACIONES)",
      },
      {
        rta_id: 121,
        rta_descripcion: "CALIFICACION DE REQUISITOS HABILITANTES",
      },
      {
        rta_id: 122,
        rta_descripcion: "CALIFICACIONES DEL PROMEDIO ACUMULADO DEL PROGRAMA",
      },
      {
        rta_id: 123,
        rta_descripcion: "CAMBIO DE PROGRAMA",
      },
      {
        rta_id: 124,
        rta_descripcion: "CAMPAÑAS INSTITUCIONALES",
      },
      {
        rta_id: 125,
        rta_descripcion: "CANCELACION",
      },
      {
        rta_id: 126,
        rta_descripcion: "CARACTERIZACION",
      },
      {
        rta_id: 127,
        rta_descripcion: "CARTA DE ADMISION",
      },
      {
        rta_id: 128,
        rta_descripcion:
          "CARTA DE ADMISION DEFINITIVA O CERTIFICADO DE ESTUDIOS DEL POSGRADO",
      },
      {
        rta_id: 129,
        rta_descripcion: "CARTA DE INSTRUCCIONES",
      },
      {
        rta_id: 130,
        rta_descripcion: "CARTA DE INTENCION",
      },
      {
        rta_id: 131,
        rta_descripcion: "CARTA DE MATRICULA",
      },
      {
        rta_id: 132,
        rta_descripcion: "CARTA DE MATRICULA DE FORMACION AVANZADA",
      },
      {
        rta_id: 133,
        rta_descripcion:
          "CARTA DE MATRICULA O SOSTENIMIENTO DEL PERIODO RENOVADO (O AMBAS)",
      },
      {
        rta_id: 134,
        rta_descripcion: "CERITIFICADO AFILIACION EPS ",
      },
      {
        rta_id: 135,
        rta_descripcion: "CERITIFICADO AFILIACION PENSION",
      },
      {
        rta_id: 136,
        rta_descripcion: "CERTIFICACION",
      },
      {
        rta_id: 137,
        rta_descripcion: "CERTIFICACION AUTORIZACION PARA MATRICULA",
      },
      {
        rta_id: 138,
        rta_descripcion:
          "CERTIFICACION DE APLICACION Y EJECUCION DEL TRABAJO DE GRADO REALIZADO POR SECRETARIA DE EDUCACION",
      },
      {
        rta_id: 139,
        rta_descripcion:
          "CERTIFICACION DE RECURSOS ADICIONALES (BECAS, PRESTAMOS, EXTRACTOS BANCARIOS)",
      },
      {
        rta_id: 140,
        rta_descripcion:
          "CERTIFICACION DE REPORTE DE AVANCE A LA GESTION - FURAG",
      },
      {
        rta_id: 141,
        rta_descripcion:
          "CERTIFICACION JURAMENTADA DE RESIDENCIA (COMUNA O CORREGIMIENTO)",
      },
      {
        rta_id: 142,
        rta_descripcion: "CERTIFICACION RENDIMIENTOS FINANCIEROS",
      },
      {
        rta_id: 143,
        rta_descripcion: "CERTIFICACION SERVICIO SOCIAL",
      },
      {
        rta_id: 144,
        rta_descripcion: "CERTIFICADO ACADEMICO",
      },
      {
        rta_id: 145,
        rta_descripcion:
          "CERTIFICADO ACTIVIDADES TRANSFERENCIA DE CONOCIMIENTO",
      },
      {
        rta_id: 146,
        rta_descripcion: "CERTIFICADO AFILIACION ARL",
      },
      {
        rta_id: 147,
        rta_descripcion: "CERTIFICADO AFILIACION FONDO DE CESANTIAS ",
      },
      {
        rta_id: 148,
        rta_descripcion: "CERTIFICADO AFILIACION SEGURIDAD SOCIAL- EPS",
      },
      {
        rta_id: 149,
        rta_descripcion: "CERTIFICADO AFILIACION SEGURIDAD SOCIAL-PENSIÓN",
      },
      {
        rta_id: 150,
        rta_descripcion: "CERTIFICADO BARRIAL Y DE RESIDENCIA",
      },
      {
        rta_id: 151,
        rta_descripcion: "CERTIFICADO COMO LIDER ESTUDIANTIL",
      },
      {
        rta_id: 152,
        rta_descripcion: "CERTIFICADO CUENTA BANCARIA",
      },
      {
        rta_id: 153,
        rta_descripcion: "CERTIFICADO DE ACTIVIDADES COMUNITARIAS Y SOCIALES",
      },
      {
        rta_id: 154,
        rta_descripcion: "CERTIFICADO DE ADMISION A LA IES",
      },
      {
        rta_id: 155,
        rta_descripcion: "CERTIFICADO DE ADMISION DE LA UNIVERSIDAD",
      },
      {
        rta_id: 156,
        rta_descripcion: "CERTIFICADO DE AFILIACION DEL SISBEN",
      },
      {
        rta_id: 157,
        rta_descripcion: "CERTIFICADO DE ANTECEDENTES",
      },
      {
        rta_id: 158,
        rta_descripcion:
          "CERTIFICADO DE ANTECEDENTES FISCALES, O BOLETA DE SALIDA O LIBRETA DE LIBERTAD",
      },
      {
        rta_id: 159,
        rta_descripcion:
          "CERTIFICADO DE ANTECEDENTES PENALES Y REQUERIMIENTOS JUDICIALES",
      },
      {
        rta_id: 160,
        rta_descripcion:
          "CERTIFICADO DE ANTECEDENTES PENALES, DISCIPLINARIOS Y FISCALES",
      },
      {
        rta_id: 161,
        rta_descripcion: "CERTIFICADO DE CALIFICACIONES",
      },
      {
        rta_id: 162,
        rta_descripcion: "CERTIFICADO DE DEPORTISTAS DE UNA DE LAS LIGAS INDER",
      },
      {
        rta_id: 163,
        rta_descripcion: "CERTIFICADO DE DEVOLUCION DE GARANTIAS",
      },
      {
        rta_id: 164,
        rta_descripcion: "CERTIFICADO DE DISCAPACIDAD",
      },
      {
        rta_id: 165,
        rta_descripcion: "CERTIFICADO DE DISPONIBILIDAD PRESUPUESTAL -CDP",
      },
      {
        rta_id: 166,
        rta_descripcion:
          "CERTIFICADO DE EGRESADO DE SISTEMA DE EDUCACION ESCOLAR PARA ADULTOS Y EXTRA EDAD (CLEI)",
      },
      {
        rta_id: 167,
        rta_descripcion:
          "CERTIFICADO DE EXISTENCIA Y REPRESENTACIÓN LEGAL O REGISTRO MERCANTIL",
      },
      {
        rta_id: 168,
        rta_descripcion:
          "CERTIFICADO DE EXPERIENCIAS SIGNIFICATIVAS DE BUENAS PRACTICAS",
      },
      {
        rta_id: 169,
        rta_descripcion:
          "CERTIFICADO DE HABER CULMINADO EL PROCESO DE JOVENES R:",
      },
      {
        rta_id: 170,
        rta_descripcion: "CERTIFICADO DE HOMOLOGACION DE MATERIAS",
      },
      {
        rta_id: 171,
        rta_descripcion: "CERTIFICADO DE IDONEIDAD",
      },
      {
        rta_id: 172,
        rta_descripcion:
          "CERTIFICADO DE INSCRIPCION EN EL REGISTRO UNICO DE SERIES DOCUMENTALES",
      },
      {
        rta_id: 173,
        rta_descripcion: "CERTIFICADO DE LA CUENTA BANCARIA",
      },
      {
        rta_id: 174,
        rta_descripcion:
          "CERTIFICADO DE LA FEDERACION DEPORTIVA DE LOS JUEGOS EN QUE PARTICIPO Y MEDALLA QUE OBTUVO",
      },
      {
        rta_id: 175,
        rta_descripcion:
          "CERTIFICADO DE LA IES INDICANDO REGISTRO CALIFICADO DEL PROGRAMA",
      },
      {
        rta_id: 176,
        rta_descripcion: "CERTIFICADO DE LA JAL",
      },
      {
        rta_id: 177,
        rta_descripcion: "CERTIFICADO DE LA UNIDAD DE VICTIMAS DEL CONFLICTO",
      },
      {
        rta_id: 178,
        rta_descripcion: "CERTIFICADO DE MATRICULA",
      },
      {
        rta_id: 179,
        rta_descripcion: "CERTIFICADO DE MEDIDAS CORRECTIVAS",
      },
      {
        rta_id: 180,
        rta_descripcion: "CERTIFICADO DE MUJERES JOVENES TALENTO",
      },
      {
        rta_id: 181,
        rta_descripcion: "CERTIFICADO DE NOTAS ACADEMICAS",
      },
      {
        rta_id: 182,
        rta_descripcion: "CERTIFICADO DE NOTAS ACADEMICAS PREGRADO",
      },
      {
        rta_id: 183,
        rta_descripcion: "CERTIFICADO DE NOTAS DEL POSGRADO ACUMULADO",
      },
      {
        rta_id: 184,
        rta_descripcion:
          "CERTIFICADO DE PAGO APORTES PARAFISCALES SEGURIDAD SOCIAL ARL Y FONDO DE SOLIDARIDAD",
      },
      {
        rta_id: 185,
        rta_descripcion: "CERTIFICADO DE PAGO DE PARAFISCALES",
      },
      {
        rta_id: 186,
        rta_descripcion:
          "CERTIFICADO DE PAGO DE SEGURIDAD SOCIAL Y PARAFISCALES",
      },
      {
        rta_id: 187,
        rta_descripcion: "CERTIFICADO DE PAGOS POR SEMESTRE",
      },
      {
        rta_id: 188,
        rta_descripcion:
          "CERTIFICADO DE PARTICIPACION FERIA, CIENCIA, TECNOLOGIA E INNOVACION",
      },
      {
        rta_id: 189,
        rta_descripcion:
          "CERTIFICADO DE PARTICIPACION OLIMPIADAS DEL CONOCIMIENTO",
      },
      {
        rta_id: 190,
        rta_descripcion:
          "CERTIFICADO DE PERTENECER AL SISTEMA DE RESPONSABILIDAD PENAL PARA ADOLESCENTES (SRPA)",
      },
      {
        rta_id: 191,
        rta_descripcion: "CERTIFICADO DE PERTENENCIA A POBLACION VULNERABLE",
      },
      {
        rta_id: 192,
        rta_descripcion:
          "CERTIFICADO DE PREMIO A LA CALIDAD EDUCATIVA CIUDAD DE MEDELLIN",
      },
      {
        rta_id: 193,
        rta_descripcion: "CERTIFICADO DE PROMEDIO ACADEMICO POR SEMESTRE",
      },
      {
        rta_id: 194,
        rta_descripcion: "CERTIFICADO DE PROMEDIO ACUMULADO",
      },
      {
        rta_id: 195,
        rta_descripcion: "CERTIFICADO DE RECIBO A SATISFACCION",
      },
      {
        rta_id: 196,
        rta_descripcion: "CERTIFICADO DE REGISTRO PRESUPUESTAL ",
      },
      {
        rta_id: 197,
        rta_descripcion: "CERTIFICADO DE RENOVACION DE CREDITO",
      },
      {
        rta_id: 198,
        rta_descripcion: "CERTIFICADO DE RESIDENCIA EN COMUNA O CORREGIMIENTO",
      },
      {
        rta_id: 199,
        rta_descripcion: "CERTIFICADO DE RESPONSABILIDAD FISCAL",
      },
      {
        rta_id: 200,
        rta_descripcion: "CERTIFICADO DE SEGURIDAD SOCIAL Y/O PARAFISCALES",
      },
      {
        rta_id: 201,
        rta_descripcion:
          "CERTIFICADO DE TRANSFERENCIA DEL CONOCIMIENTO (LISTAS DE ASISTENCIA Y REGISTRO FOTOGRAFICO)",
      },
      {
        rta_id: 202,
        rta_descripcion: "CERTIFICADO DE TRAYECTORIA GRUPO DE INVESTIGACION",
      },
      {
        rta_id: 203,
        rta_descripcion: "CERTIFICADO DE VALOR EFECTIVO GIRADO POR EL FONDO",
      },
      {
        rta_id: 204,
        rta_descripcion: "CERTIFICADO DE VINCULACION",
      },
      {
        rta_id: 205,
        rta_descripcion: "CERTIFICADO DEL ICFES",
      },
      {
        rta_id: 206,
        rta_descripcion: "CERTIFICADO GRUPO DE INVESTIGACION COLCIENCIAS",
      },
      {
        rta_id: 207,
        rta_descripcion: "CERTIFICADO JUNTA CENTRAL DE CONTADORES",
      },
      {
        rta_id: 208,
        rta_descripcion: "CERTIFICADO MEDICO CONDICION DISCAPACIDAD",
      },
      {
        rta_id: 209,
        rta_descripcion: "CERTIFICADO PAGO DE PARAFISCALES",
      },
      {
        rta_id: 210,
        rta_descripcion: "CERTIFICADO PRESTACION DE SERVICIO SOCIAL DE ENTIDAD",
      },
      {
        rta_id: 211,
        rta_descripcion: "CERTIFICADO PRUEBAS ICFES SABER 11",
      },
      {
        rta_id: 212,
        rta_descripcion: "CERTIFICADO REGISTRO MERCANTIL",
      },
      {
        rta_id: 213,
        rta_descripcion: "CERTIFICADO RETENCION EN LA FUENTE",
      },
      {
        rta_id: 214,
        rta_descripcion: "CERTIFICADO SOBRE NO SANCIONES DIRIGIDA A SAPIENCIA",
      },
      {
        rta_id: 215,
        rta_descripcion: "CERTIFICADOS ANTECEDENTES PROCURADURIA ",
      },
      {
        rta_id: 216,
        rta_descripcion:
          "CERTIFICADOS ANTECEDENTES Y REQUERIMIENTOS JUDICIALES-POLICIA NACIONAL ",
      },
      {
        rta_id: 217,
        rta_descripcion: "CERTIFICADOS DE CONTRALORIA ",
      },
      {
        rta_id: 218,
        rta_descripcion: "CERTIFICADOS DE ESTUDIOS ",
      },
      {
        rta_id: 219,
        rta_descripcion:
          "CERTIFICADOS DE GANADORES DE ESTIMULOS AL ARTE Y LA CULTURA",
      },
      {
        rta_id: 220,
        rta_descripcion: "CERTIFICADOS DE GRUPOS DE INVESTIGACION",
      },
      {
        rta_id: 221,
        rta_descripcion:
          "CERTIFICADOS DE PERTENENCIA A POBLACION DE ORIGEN ETNICO",
      },
      {
        rta_id: 222,
        rta_descripcion: "CERTIFICADOS DE PUBLICACIONES DE ARTICULOS",
      },
      {
        rta_id: 223,
        rta_descripcion: "CERTIFICADOS DE PUNTAJE DEL SISBEN",
      },
      {
        rta_id: 224,
        rta_descripcion: "CERTIFICADOS LABORALES",
      },
      {
        rta_id: 225,
        rta_descripcion:
          "CERTIFICADOS MULTIPLICADORES DE CONVIVENCIA DEL PROGRAMA DELINQUIR NO PAGA",
      },
      {
        rta_id: 226,
        rta_descripcion:
          "CERTIFICADOS MULTIPLICADORES DE CONVIVENCIA PROGRAMA REINTEGRACION SOSTENIBLE PARA TERRITORIO DE PAZ",
      },
      {
        rta_id: 227,
        rta_descripcion: "CERTIFICADOS OTROS GRUPOS DE INVESTIGACION",
      },
      {
        rta_id: 228,
        rta_descripcion: "CERTIFICDOS DE EXISTENCIA Y REPRESENTACION LEGAL",
      },
      {
        rta_id: 229,
        rta_descripcion: "CERTTICADO ADRES",
      },
      {
        rta_id: 230,
        rta_descripcion: "CESION DE CONTRATO",
      },
      {
        rta_id: 231,
        rta_descripcion: "CIERRE DE CREDITO",
      },
      {
        rta_id: 232,
        rta_descripcion: "CIRCULAR",
      },
      {
        rta_id: 233,
        rta_descripcion: "CITACION",
      },
      {
        rta_id: 234,
        rta_descripcion: "CITACION PARA NOTIFICACION DE PROCESO DISCIPLINARIO",
      },
      {
        rta_id: 235,
        rta_descripcion: "CITACION PARA NOTIFICACION PERSONAL",
      },
      {
        rta_id: 236,
        rta_descripcion: "COBRO COSTO ADMINISTRATIVO",
      },
      {
        rta_id: 237,
        rta_descripcion: "COBRO PRIORITARIO",
      },
      {
        rta_id: 238,
        rta_descripcion: "COMISION",
      },
      {
        rta_id: 239,
        rta_descripcion: "COMITE ESTRUCTURADOR Y EVALUADOR",
      },
      {
        rta_id: 240,
        rta_descripcion: "COMODATO",
      },
      {
        rta_id: 241,
        rta_descripcion: "COMPROBANTE DE EGRESO",
      },
      {
        rta_id: 242,
        rta_descripcion: "COMPROBANTE DE PAGO",
      },
      {
        rta_id: 243,
        rta_descripcion: "COMPROBANTE DE PAGO A LA UNIVERSIDAD",
      },
      {
        rta_id: 244,
        rta_descripcion:
          "COMPROBANTE DE PAGO DEL 10 POR CIENTO O AUTORIZACION DE DESCUENTO",
      },
      {
        rta_id: 245,
        rta_descripcion: "COMPROBANTES AMORTIZACIONES",
      },
      {
        rta_id: 246,
        rta_descripcion: "COMPROBANTES DE VALORES GIRADOS",
      },
      {
        rta_id: 247,
        rta_descripcion: "COMPROBANTES DEPRECIACIONES",
      },
      {
        rta_id: 248,
        rta_descripcion: "COMPROMISO ANTICORRUPCIÓN",
      },
      {
        rta_id: 249,
        rta_descripcion: "COMPROMISO LIQUIDACION",
      },
      {
        rta_id: 250,
        rta_descripcion: "COMUNICACION",
      },
      {
        rta_id: 251,
        rta_descripcion: "COMUNICACION CONDICIONES DE AMORTIZACION",
      },
      {
        rta_id: 252,
        rta_descripcion: "COMUNICACION DE SOLICITUD DE CONDONACION",
      },
      {
        rta_id: 253,
        rta_descripcion: "COMUNICACION EXTERNA",
      },
      {
        rta_id: 254,
        rta_descripcion: "COMUNICACION INTERNA",
      },
      {
        rta_id: 255,
        rta_descripcion: "COMUNICACION OFICIAL - CONCEPTO TECNICO",
      },
      {
        rta_id: 256,
        rta_descripcion:
          "COMUNICACION OFICIAL - REMISION DE TRD PARA CONVALIDACION",
      },
      {
        rta_id: 257,
        rta_descripcion: "COMUNICACION OFICIAL -CRONOGRAMA",
      },
      {
        rta_id: 258,
        rta_descripcion: "COMUNICACION OFICIAL DE RECEPCION DE DOCUMENTOS",
      },
      {
        rta_id: 259,
        rta_descripcion: "COMUNICACION REMISORIA DEL CONCEPTO",
      },
      {
        rta_id: 260,
        rta_descripcion: "COMUNICACION RESPUESTA INFORME PRELIMINAR",
      },
      {
        rta_id: 261,
        rta_descripcion: "COMUNICACIONES OFICIALES",
      },
      {
        rta_id: 262,
        rta_descripcion: "COMUNICADO PODER PREFERENTE",
      },
      {
        rta_id: 263,
        rta_descripcion: "CONCEPTO FAVORABLE",
      },
      {
        rta_id: 264,
        rta_descripcion: "CONCEPTO FAVORABLE TRASLADO",
      },
      {
        rta_id: 265,
        rta_descripcion: "CONCEPTO JURIDICO",
      },
      {
        rta_id: 266,
        rta_descripcion: "CONCEPTO TECNICO",
      },
      {
        rta_id: 267,
        rta_descripcion: "CONCEPTOS MEDICO OCUPACIONALES",
      },
      {
        rta_id: 268,
        rta_descripcion: "CONCILIACION BANCARIA",
      },
      {
        rta_id: 269,
        rta_descripcion: "CONCILIACION DETALLADA",
      },
      {
        rta_id: 270,
        rta_descripcion: "CONCILIACIONES",
      },
      {
        rta_id: 271,
        rta_descripcion:
          "CONSTANCIA DE APROBACION DE APLAZAMIENTO SERVICIO SOCIAL",
      },
      {
        rta_id: 272,
        rta_descripcion: "CONSTANCIA DE PERMANENCIA",
      },
      {
        rta_id: 273,
        rta_descripcion: "CONSTANCIA ENTREGA DE DOCUMENTACION",
      },
      {
        rta_id: 274,
        rta_descripcion: "CONSTITUCION DE REUNIONES",
      },
      {
        rta_id: 275,
        rta_descripcion: "CONTRATO DE INTERVENTORIA",
      },
      {
        rta_id: 276,
        rta_descripcion: "CONTRATO DE PRESTACION DE SERVICIOS",
      },
      {
        rta_id: 277,
        rta_descripcion: "CONTRATO FIDUCIA",
      },
      {
        rta_id: 278,
        rta_descripcion: "CONTRATO LABORAL DEBIDAMENTE FIRMADO ",
      },
      {
        rta_id: 279,
        rta_descripcion: "CONTROL DE ENTREGA DE PROPUESTAS",
      },
      {
        rta_id: 280,
        rta_descripcion: "CONTROL DE INGRESO",
      },
      {
        rta_id: 281,
        rta_descripcion: "CONTROL DE REQUERIMIENTOS",
      },
      {
        rta_id: 282,
        rta_descripcion: "CONVENIO",
      },
      {
        rta_id: 283,
        rta_descripcion: "CONVENIO INTERADMINISTRATIVO",
      },
      {
        rta_id: 284,
        rta_descripcion: "CONVOCATORIA A AUDIENCIA PUBLICA",
      },
      {
        rta_id: 285,
        rta_descripcion: "CONVOCATORIAS BECAS TECNOLOGIAS",
      },
      {
        rta_id: 286,
        rta_descripcion: "CONVOCATORIAS RUTAS FORMATIVAS TALENTO ESPECIALIZADO",
      },
      {
        rta_id: 287,
        rta_descripcion: "COPIA CEDULA DE CIUDADANIA ",
      },
      {
        rta_id: 288,
        rta_descripcion: "COPIA CEDULA DEL CODEUDOR",
      },
      {
        rta_id: 289,
        rta_descripcion:
          "COPIA DEL COMITE OPERATIVO PARA LA DEJACION DE ARMAS (CODA)",
      },
      {
        rta_id: 290,
        rta_descripcion:
          "COPIA DEL CONVENIO ENTRE LA IES COLOMBIANA Y LA IES DEL EXTERIOR",
      },
      {
        rta_id: 291,
        rta_descripcion: "COPIA DEL DOCUMENTO DE IDENTIDAD DEL BENEFICIARIO",
      },
      {
        rta_id: 292,
        rta_descripcion:
          "COPIA DEL DOCUMENTO DE IDENTIDAD DEL DEUDOR SOLIDARIO",
      },
      {
        rta_id: 293,
        rta_descripcion:
          "COPIA DEL DOCUMENTO DE IDENTIDAD DEL TUTOR (CUANDO EL BENEFICIARIO ES MENOR DE EDAD)",
      },
      {
        rta_id: 294,
        rta_descripcion: "COPIA DEL GRADO DE TECNOLOGIA",
      },
      {
        rta_id: 295,
        rta_descripcion:
          "COPIA DEL INFORME INDIVIDUAL DE RESULTADOS SABER 11 (ICFES)",
      },
      {
        rta_id: 296,
        rta_descripcion: "COPIA DEL PASAPORTE",
      },
      {
        rta_id: 297,
        rta_descripcion: "COPIA DIGITAL EN CD O DVD CON EL TRABAJO DE GRADO",
      },
      {
        rta_id: 298,
        rta_descripcion: "COPIA DOCUMENTO DE IDENTIDAD",
      },
      {
        rta_id: 299,
        rta_descripcion: "COPIA DOCUMENTO DE IDENTIDAD DE BENEFICIARIOS",
      },
      {
        rta_id: 300,
        rta_descripcion: "COPIA DOCUMENTO DE IDENTIDAD DEL ACUDIENTE",
      },
      {
        rta_id: 301,
        rta_descripcion: "COPIA DOCUMENTOS DE IDENTIFICACION  NUCLEO FAMILIAR",
      },
      {
        rta_id: 302,
        rta_descripcion: "COPIA FACTURA DE SERVICIOS PUBLICOS",
      },
      {
        rta_id: 303,
        rta_descripcion: "COPIA LIBRETA MILITAR",
      },
      {
        rta_id: 304,
        rta_descripcion: "COPIA REGISTRO CIVIL DE NACIMIENTO",
      },
      {
        rta_id: 305,
        rta_descripcion:
          "COPIA RESOLUCION DE NOMBRAMIENTO DEL MUNICIPIO DE MEDELLIN",
      },
      {
        rta_id: 306,
        rta_descripcion: "CREACION TERCEROS",
      },
      {
        rta_id: 307,
        rta_descripcion: "CUADRO DE CLASIFICACION DOCUMENTAL",
      },
      {
        rta_id: 308,
        rta_descripcion: "CUENTA DE COBRO",
      },
      {
        rta_id: 309,
        rta_descripcion: "CUENTA DE COBROS RENDIMIENTOS FINANCIEROS",
      },
      {
        rta_id: 310,
        rta_descripcion: "DECLARACION JURAMENTADA  ",
      },
      {
        rta_id: 311,
        rta_descripcion:
          "DECLARACION JURAMENTADA DE BIENES Y SERVICIOS, RENTAS Y ACTIVIDADES ECONOMICAS",
      },
      {
        rta_id: 312,
        rta_descripcion: "DECLARACION JURAMENTADA DE RESIDENCIA",
      },
      {
        rta_id: 313,
        rta_descripcion: "DEMANDA",
      },
      {
        rta_id: 314,
        rta_descripcion: "DENUNCIA",
      },
      {
        rta_id: 315,
        rta_descripcion: "DENUNCIAS",
      },
      {
        rta_id: 316,
        rta_descripcion: "DEPENDIENTES ECONOMICOS",
      },
      {
        rta_id: 317,
        rta_descripcion: "DERECHO DE PETICION",
      },
      {
        rta_id: 318,
        rta_descripcion: "DERECHOS (PARD)",
      },
      {
        rta_id: 319,
        rta_descripcion: "DESAGREGACION POBLACIONAL ",
      },
      {
        rta_id: 320,
        rta_descripcion: "DESCARGOS",
      },
      {
        rta_id: 321,
        rta_descripcion: "DESCRIPCION DE CADA OBLIGACION",
      },
      {
        rta_id: 322,
        rta_descripcion: "DESEMBOLSOS",
      },
      {
        rta_id: 323,
        rta_descripcion: "DESIGNACION",
      },
      {
        rta_id: 324,
        rta_descripcion: "DESIGNACION DE CEEC",
      },
      {
        rta_id: 325,
        rta_descripcion: "DESIGNACION DE SUPERVISION",
      },
      {
        rta_id: 326,
        rta_descripcion: "DESIGNACION INTERVENTORIA",
      },
      {
        rta_id: 327,
        rta_descripcion: "DETALLE DE LA COMISION",
      },
      {
        rta_id: 328,
        rta_descripcion: "DEVOLUCION",
      },
      {
        rta_id: 329,
        rta_descripcion: "DEVOLUCIONES DE FACTURA",
      },
      {
        rta_id: 330,
        rta_descripcion: "DIPLOMA",
      },
      {
        rta_id: 331,
        rta_descripcion: "DIPLOMA DE POSGRADO O CERTIFICADO DE PASANTIA",
      },
      {
        rta_id: 332,
        rta_descripcion: "DIPLOMA O ACTA DE GRADO DE BACHILLER",
      },
      {
        rta_id: 333,
        rta_descripcion: "DIPLOMA O ACTA DE GRADO DEL PREGRADO",
      },
      {
        rta_id: 334,
        rta_descripcion: "DOCUMENTO ACLARATORIO",
      },
      {
        rta_id: 335,
        rta_descripcion: "DOCUMENTO DE COBRO",
      },
      {
        rta_id: 336,
        rta_descripcion:
          "DOCUMENTOS DE EXISTENCIA Y REPRESENTACION LEGAL DEL COMODATARIO",
      },
      {
        rta_id: 337,
        rta_descripcion: "DOCUMENTOS DE REPRESENTACION LEGAL",
      },
      {
        rta_id: 338,
        rta_descripcion: "DOCUMENTOS DE VERIFICACION DE DATOS HOJA DE VIDA",
      },
      {
        rta_id: 339,
        rta_descripcion:
          "DOCUMENTOS EQUIVALENTES A LA FACTURA Y/O CUENTA DE COBRO",
      },
      {
        rta_id: 340,
        rta_descripcion: "DOCUMENTOS PROCESO CONTRATACION",
      },
      {
        rta_id: 341,
        rta_descripcion: "EDUCACION SUPERIOR EN CIFRAS",
      },
      {
        rta_id: 342,
        rta_descripcion: "EJECUCION DEL CONTRATO",
      },
      {
        rta_id: 343,
        rta_descripcion: "EJECUCION INGRESOS Y GASTOS",
      },
      {
        rta_id: 344,
        rta_descripcion: "ENCUESTAS",
      },
      {
        rta_id: 345,
        rta_descripcion: "ENCUESTAS DE ESTUDIO",
      },
      {
        rta_id: 346,
        rta_descripcion: "ENTREGA DE DOCUMENTOS DE CONDONACION",
      },
      {
        rta_id: 347,
        rta_descripcion: "ENTREGA DE INFORMES",
      },
      {
        rta_id: 348,
        rta_descripcion: "ESQUEMA DE PUBLICACION DE INFORMACION",
      },
      {
        rta_id: 349,
        rta_descripcion: "ESTADO DE SITUACION FINANCIERA",
      },
      {
        rta_id: 350,
        rta_descripcion: "ESTADOS FINANCIEROS",
      },
      {
        rta_id: 351,
        rta_descripcion: "ESTUDIO PREVIO",
      },
      {
        rta_id: 352,
        rta_descripcion:
          "ESTUDIOS ESTADISTICOS OBSERVATORIO DE EDUCACION SUPERIOR",
      },
      {
        rta_id: 353,
        rta_descripcion: "ESTUDIOS PREVIOS",
      },
      {
        rta_id: 354,
        rta_descripcion: "ETAPA PRECONTRACTUAL",
      },
      {
        rta_id: 355,
        rta_descripcion: "EVALUACION AUDITORES",
      },
      {
        rta_id: 356,
        rta_descripcion: "EVALUACION DE PUESTO DE TRABAJO",
      },
      {
        rta_id: 357,
        rta_descripcion: "EVALUACION DEL DESEMPEÑO LABORAL",
      },
      {
        rta_id: 358,
        rta_descripcion: "EVALUACION INDUCCION O REINDUCCION",
      },
      {
        rta_id: 359,
        rta_descripcion: "EVALUACION RENDICION DE CUENTAS",
      },
      {
        rta_id: 360,
        rta_descripcion: "EVIDENCIAS DE EJECUCION",
      },
      {
        rta_id: 361,
        rta_descripcion: "EVIDENCIAS DE EJECUCION DEL CONTRATO",
      },
      {
        rta_id: 362,
        rta_descripcion: "EVIDENCIAS DE LA IMPLEMENTACION DE MEJORAS",
      },
      {
        rta_id: 363,
        rta_descripcion: "EXAMEN PREOCUPACIONAL ",
      },
      {
        rta_id: 364,
        rta_descripcion: "EXPEDIENTE GENERAL",
      },
      {
        rta_id: 365,
        rta_descripcion: "EXPERIENCIA PROFESIONAL ",
      },
      {
        rta_id: 366,
        rta_descripcion: "EXTRACTO BANCARIO",
      },
      {
        rta_id: 367,
        rta_descripcion: "FACTURA",
      },
      {
        rta_id: 368,
        rta_descripcion: "FACTURA IES",
      },
      {
        rta_id: 369,
        rta_descripcion: "FALLO DE PRIMERA INSTANCIA",
      },
      {
        rta_id: 370,
        rta_descripcion: "FALLO DE SEGUNDA INSTANCIA",
      },
      {
        rta_id: 371,
        rta_descripcion: "FELICITACIONES",
      },
      {
        rta_id: 372,
        rta_descripcion:
          "FICHA DE SEGUIMIENTO DE PRESTACION DE SERVICIO SOCIAL",
      },
      {
        rta_id: 373,
        rta_descripcion: "FICHA DEL SISBEN",
      },
      {
        rta_id: 374,
        rta_descripcion: "FICHA TECNICA",
      },
      {
        rta_id: 375,
        rta_descripcion: "FICHA TECNICA DE INDICADORES ",
      },
      {
        rta_id: 376,
        rta_descripcion: "FLUJO DE CAJA",
      },
      {
        rta_id: 377,
        rta_descripcion: "FLUJO DE CAJAS",
      },
      {
        rta_id: 378,
        rta_descripcion: "FORMATO DE VERIFICACION HOJA DE VIDA",
      },
      {
        rta_id: 379,
        rta_descripcion: "FORMATOS",
      },
      {
        rta_id: 380,
        rta_descripcion: "FORMULARIO DE ACTUALIZACION DE DATOS (SEMESTRAL)",
      },
      {
        rta_id: 381,
        rta_descripcion: "FORMULARIO DE CARACTERIZACION DE BENEFICIARIOS",
      },
      {
        rta_id: 382,
        rta_descripcion: "FORMULARIO DE CONTRIBUCION ESPECIAL",
      },
      {
        rta_id: 383,
        rta_descripcion:
          "FORMULARIO DE DECLARACION DE RENTAS, INGRESOS Y PATRIMONIO –  (FORMULARIO 110)",
      },
      {
        rta_id: 384,
        rta_descripcion: "FORMULARIO DE ESTAMPILLA PROCULTURA",
      },
      {
        rta_id: 385,
        rta_descripcion: "FORMULARIO DE INSCRIPCION",
      },
      {
        rta_id: 386,
        rta_descripcion: "FORMULARIO DE INSCRIPCION SAPIENCIA",
      },
      {
        rta_id: 387,
        rta_descripcion: "FORMULARIO DE RENOVACION",
      },
      {
        rta_id: 388,
        rta_descripcion: "FORMULARIO DE RETENCION DE ICA",
      },
      {
        rta_id: 389,
        rta_descripcion:
          "FORMULARIO DE RETENCION EN LA FUENTE – (FORMULARIO 350)",
      },
      {
        rta_id: 390,
        rta_descripcion: "FOTOS INSTITUCIONALES",
      },
      {
        rta_id: 391,
        rta_descripcion: "FREE PRESS",
      },
      {
        rta_id: 392,
        rta_descripcion: "GARANTIA",
      },
      {
        rta_id: 393,
        rta_descripcion: "GARANTIA UNICA",
      },
      {
        rta_id: 394,
        rta_descripcion: "GUIA CITACION",
      },
      {
        rta_id: 395,
        rta_descripcion: "GUIA DE PRESENTACION DE PROPUESTAS",
      },
      {
        rta_id: 396,
        rta_descripcion: "GUIA DEFINITIVA",
      },
      {
        rta_id: 397,
        rta_descripcion: "GUIAS",
      },
      {
        rta_id: 398,
        rta_descripcion: "HISTORIA LABORAL",
      },
      {
        rta_id: 399,
        rta_descripcion: "HISTORIAS DE BENEFICIARIOS",
      },
      {
        rta_id: 400,
        rta_descripcion: "HOJA DE CONTROL",
      },
      {
        rta_id: 401,
        rta_descripcion: "HOJA DE VIDA",
      },
      {
        rta_id: 402,
        rta_descripcion: "HOJA DE VIDA ACADEMICA",
      },
      {
        rta_id: 403,
        rta_descripcion: "HOJA DE VIDA DE LA FUNCION PUBLICA ",
      },
      {
        rta_id: 404,
        rta_descripcion: "HOJA DE VIDA EQUIPO",
      },
      {
        rta_id: 405,
        rta_descripcion: "HOJA DE VIDA PERSONAL",
      },
      {
        rta_id: 406,
        rta_descripcion: "HORARIO ACADEMICO",
      },
      {
        rta_id: 407,
        rta_descripcion: "INCONSISTENCIA",
      },
      {
        rta_id: 408,
        rta_descripcion: "INDICADORES DE GESTION",
      },
      {
        rta_id: 409,
        rta_descripcion: "INDICE DE INFORMACION CLASIFICADA Y RESERVADA",
      },
      {
        rta_id: 410,
        rta_descripcion: "INFORMACION DE NECESIDADES",
      },
      {
        rta_id: 411,
        rta_descripcion: "INFORMACION DE PROVEEDORES",
      },
      {
        rta_id: 412,
        rta_descripcion: "INFORMACION DONACION EQUIPOS",
      },
      {
        rta_id: 413,
        rta_descripcion: "INFORME",
      },
      {
        rta_id: 414,
        rta_descripcion: "INFORME ACADEMICO",
      },
      {
        rta_id: 415,
        rta_descripcion: "INFORME AUDITORIA",
      },
      {
        rta_id: 416,
        rta_descripcion: "INFORME BASE DE DATOS FONDO EPM",
      },
      {
        rta_id: 417,
        rta_descripcion: "INFORME DE ACTIVIDAD",
      },
      {
        rta_id: 418,
        rta_descripcion: "INFORME DE AUDIENCIA PUBLICA",
      },
      {
        rta_id: 419,
        rta_descripcion: "INFORME DE AVANCE",
      },
      {
        rta_id: 420,
        rta_descripcion: "INFORME DE CIERRE",
      },
      {
        rta_id: 421,
        rta_descripcion: "INFORME DE CONCILIACION",
      },
      {
        rta_id: 422,
        rta_descripcion: "INFORME DE CUMPLIMIENTO NORMATIVO DE USO DE SOFTWARE",
      },
      {
        rta_id: 423,
        rta_descripcion:
          "INFORME DE DESARROLLO DE LA CONVOCATORIA (DOCUMENTO TECNICO DE CONVOCATORIA)",
      },
      {
        rta_id: 424,
        rta_descripcion: "INFORME DE DISPONIBILIDAD PRESUPUESTAL",
      },
      {
        rta_id: 425,
        rta_descripcion: "INFORME DE EJECUCION",
      },
      {
        rta_id: 426,
        rta_descripcion: "INFORME DE ESTUDIOS REALIZADOS",
      },
      {
        rta_id: 427,
        rta_descripcion: "INFORME DE EVACUACION DE OFERENTES",
      },
      {
        rta_id: 428,
        rta_descripcion: "INFORME DE EVALUACION AL SISTEMA DE CONTROL",
      },
      {
        rta_id: 429,
        rta_descripcion: "INFORME DE EVALUACION DE OFERTANTES",
      },
      {
        rta_id: 430,
        rta_descripcion: "INFORME DE EVALUACION DE OFERTAS",
      },
      {
        rta_id: 431,
        rta_descripcion: "INFORME DE EVALUACION DE RUTAS FORMATIVAS",
      },
      {
        rta_id: 432,
        rta_descripcion: "INFORME DE GESTION DEL RIESGO ",
      },
      {
        rta_id: 433,
        rta_descripcion: "INFORME DE INICIO",
      },
      {
        rta_id: 434,
        rta_descripcion: "INFORME DE PAGO",
      },
      {
        rta_id: 435,
        rta_descripcion: "INFORME DE REVISORIA FISCAL",
      },
      {
        rta_id: 436,
        rta_descripcion: "INFORME DE SEGUIMIENTO AL PINAR",
      },
      {
        rta_id: 437,
        rta_descripcion: "INFORME DE SEGUIMIENTO AL PLAN ANTICORRUPCIÓN",
      },
      {
        rta_id: 438,
        rta_descripcion: "INFORME DE SEGUIMIENTO AL PLAN DE ACCION",
      },
      {
        rta_id: 439,
        rta_descripcion: "INFORME DE SEGUIMIENTO AL PLAN ESTRATEGICO",
      },
      {
        rta_id: 440,
        rta_descripcion: "INFORME DE SUPERVISION",
      },
      {
        rta_id: 441,
        rta_descripcion: "INFORME DE VERIFICACION",
      },
      {
        rta_id: 442,
        rta_descripcion: "INFORME DEFINITIVO",
      },
      {
        rta_id: 443,
        rta_descripcion: "INFORME FINAL",
      },
      {
        rta_id: 444,
        rta_descripcion: "INFORME FINAL DE ACTIVIDADES",
      },
      {
        rta_id: 445,
        rta_descripcion: "INFORME FINAL DE AUDITORIA",
      },
      {
        rta_id: 446,
        rta_descripcion: "INFORME FINAL DE SUPERVISION",
      },
      {
        rta_id: 447,
        rta_descripcion: "INFORME FINANCIERO",
      },
      {
        rta_id: 448,
        rta_descripcion: "INFORME MENSUAL",
      },
      {
        rta_id: 449,
        rta_descripcion: "INFORME PARCIAL ",
      },
      {
        rta_id: 450,
        rta_descripcion: "INFORME PARCIAL DE SUPERVISION",
      },
      {
        rta_id: 451,
        rta_descripcion: "INFORME PRESUPUESTAL",
      },
      {
        rta_id: 452,
        rta_descripcion: "INFORME SEMANAL",
      },
      {
        rta_id: 453,
        rta_descripcion: "INFORME TECNICO",
      },
      {
        rta_id: 454,
        rta_descripcion: "INFORMES A ENTES DE CONTROL ",
      },
      {
        rta_id: 455,
        rta_descripcion: "INFORMES DE AUSTERIDAD EN EL GASTO PUBLICO",
      },
      {
        rta_id: 456,
        rta_descripcion: "INFORMES DE AVANCE DE EJECUCION DEL CONTRATO",
      },
      {
        rta_id: 457,
        rta_descripcion: "INFORMES DE AVANCE DE EJECUCION DELCONVENIO",
      },
      {
        rta_id: 458,
        rta_descripcion: "INFORMES DE EJECUCION PRESUPUESTAL",
      },
      {
        rta_id: 459,
        rta_descripcion:
          "INFORMES DE ENCUESTA DE SATISFACCION DE ATENCION AL CIUDADANO",
      },
      {
        rta_id: 460,
        rta_descripcion: "INFORMES DE ESTUDIOS ESTADISTICOS",
      },
      {
        rta_id: 461,
        rta_descripcion: "INFORMES DE EVALUACION DEL MODELO MPG",
      },
      {
        rta_id: 462,
        rta_descripcion: "INFORMES DE GESTION",
      },
      {
        rta_id: 463,
        rta_descripcion: "INFORMES DE RENDICION DE CUENTAS",
      },
      {
        rta_id: 464,
        rta_descripcion: "INFORMES DE SEGUIMIENTO AL MAPA DE RIESGOS ",
      },
      {
        rta_id: 465,
        rta_descripcion: "INFORMES PORMENORIZADO DEL ESTADO DE CONTROL INTERNO",
      },
      {
        rta_id: 466,
        rta_descripcion: "INFORMES PQRSDF",
      },
      {
        rta_id: 467,
        rta_descripcion: "INHABILIDADES INCOMPATIBILIDADES Y CONSULTAS",
      },
      {
        rta_id: 468,
        rta_descripcion: "INICIO ETAPA AMORTIZACION",
      },
      {
        rta_id: 469,
        rta_descripcion:
          "INICIO ETAPA AMORTIZACION BENEFICIARIO DEUDOR SOLIDARIO",
      },
      {
        rta_id: 470,
        rta_descripcion: "INSTRUCTIVOS",
      },
      {
        rta_id: 471,
        rta_descripcion: "INSTRUMENTOS DE CONTROL DE TRANSPORTE",
      },
      {
        rta_id: 472,
        rta_descripcion: "INSTRUMENTOS DE CONTROL DE VIGILANCIA",
      },
      {
        rta_id: 473,
        rta_descripcion: "INSTRUMENTOS DE CONTROL DESCRIPCION Y CONSULTA",
      },
      {
        rta_id: 474,
        rta_descripcion: "INSTRUMENTOS DE CONTROL TIC",
      },
      {
        rta_id: 475,
        rta_descripcion: "INVENTARIO DE BIENES MUEBLES",
      },
      {
        rta_id: 476,
        rta_descripcion: "INVENTARIO DOCUMENTAL",
      },
      {
        rta_id: 477,
        rta_descripcion: "INVESTIGACIONES",
      },
      {
        rta_id: 478,
        rta_descripcion: "INVITACIÓN ",
      },
      {
        rta_id: 479,
        rta_descripcion: "INVITACION PUBLICA",
      },
      {
        rta_id: 480,
        rta_descripcion: "JUSTIFICACION DE ADICION",
      },
      {
        rta_id: 481,
        rta_descripcion: "JUSTIFICACION DE LA CONTRATACION DIRECTA",
      },
      {
        rta_id: 482,
        rta_descripcion: "JUSTIFICACION DE MODIFICACION",
      },
      {
        rta_id: 483,
        rta_descripcion: "LIBRO AUXILIAR DE BANCOS",
      },
      {
        rta_id: 484,
        rta_descripcion: "LIBRO AUXILIAR O LIBRO DIARIO",
      },
      {
        rta_id: 485,
        rta_descripcion: "LIBRO DIARIO",
      },
      {
        rta_id: 486,
        rta_descripcion: "LIBRO MAYOR DE BALANCE",
      },
      {
        rta_id: 487,
        rta_descripcion: "LIQUIDACION",
      },
      {
        rta_id: 488,
        rta_descripcion: "LIQUIDACION DE MATRICULA",
      },
      {
        rta_id: 489,
        rta_descripcion: "LIQUIDACION DE MATRICULA DEL PERIODO QUE SE RENUEVA",
      },
      {
        rta_id: 490,
        rta_descripcion: "LIQUIDACION DE MATRICULA DEL POSGRADO",
      },
      {
        rta_id: 491,
        rta_descripcion: "LIQUIDACION POR MATRICULA POR SEMESTRE",
      },
      {
        rta_id: 492,
        rta_descripcion: "LISTA DE CHEQUEO",
      },
      {
        rta_id: 493,
        rta_descripcion: "LISTA DE RECEPCION DE PROPUESTAS",
      },
      {
        rta_id: 494,
        rta_descripcion: "LISTA DE VERIFICACION",
      },
      {
        rta_id: 495,
        rta_descripcion: "LISTADO DE ASISTENCIA F-AP-GA-004",
      },
      {
        rta_id: 496,
        rta_descripcion: "MANUAL DE CALIDAD",
      },
      {
        rta_id: 497,
        rta_descripcion: "MANUAL DE CONTRATACION ",
      },
      {
        rta_id: 498,
        rta_descripcion: "MANUAL DE FUNCIONES Y COMPETENCIAS",
      },
      {
        rta_id: 499,
        rta_descripcion: "MANUAL DE GESTION DEL RIESGO",
      },
      {
        rta_id: 500,
        rta_descripcion: "MANUAL DE IDENTIDAD CORPORATIVA",
      },
      {
        rta_id: 501,
        rta_descripcion: "MANUAL DE INTERVENTORIA ",
      },
      {
        rta_id: 502,
        rta_descripcion: "MANUAL DE PROCEDIMIENTOS DEL BANCO DE PROYECTOS",
      },
      {
        rta_id: 503,
        rta_descripcion: "MANUALES DE ATENCION AL CIUDADANO",
      },
      {
        rta_id: 504,
        rta_descripcion:
          "MANUALES DE CONTRATACION Y SUPERVISION E INTERVENTORIA",
      },
      {
        rta_id: 505,
        rta_descripcion: "MANUALES DE EMERGENCIAS Y CONTINGENCIAS SG-SST",
      },
      {
        rta_id: 506,
        rta_descripcion:
          "MANUALES DE LA METODOLOGIA DE ASIGNACION DE PERTINENCIA",
      },
      {
        rta_id: 507,
        rta_descripcion: "MANUALES DE RECUPERACION DE CARTERA",
      },
      {
        rta_id: 508,
        rta_descripcion:
          "MANUALES DEL PROCESO ACCESO Y PERMANENCIA A LA EDUCACION SUPERIOR",
      },
      {
        rta_id: 509,
        rta_descripcion:
          "MANUALES ESPECIFICOS DE FUNCIONES Y COMPETENCIAS LABORALES",
      },
      {
        rta_id: 510,
        rta_descripcion: "MANUALES PARA EL MANEJO DE LA BATERIA DE INDICADORES",
      },
      {
        rta_id: 511,
        rta_descripcion: "MANUALES PARA EL MODELO PREDICTIVO DE DESERCION",
      },
      {
        rta_id: 512,
        rta_descripcion: "MAPA DE RIESGOS INSTITUCIONAL",
      },
      {
        rta_id: 513,
        rta_descripcion: "MAPA DE RIESGOS POR DEPENDENCIA",
      },
      {
        rta_id: 514,
        rta_descripcion: "MATRICULA",
      },
      {
        rta_id: 515,
        rta_descripcion: "MATRIZ DE FORMULACION DE PROYECTOS",
      },
      {
        rta_id: 516,
        rta_descripcion: "MATRIZ DE RIESGOS",
      },
      {
        rta_id: 517,
        rta_descripcion: "MEDIDAS CORRECTIVAS RNMC",
      },
      {
        rta_id: 518,
        rta_descripcion: "MEMORANDO",
      },
      {
        rta_id: 519,
        rta_descripcion: "MEMORANDO DE ENTENDIMIENTO",
      },
      {
        rta_id: 520,
        rta_descripcion: "MEMORIA DESCRIPTIVA",
      },
      {
        rta_id: 521,
        rta_descripcion: "MEMORIAS DE INDUCCION Y REINDUCCION",
      },
      {
        rta_id: 522,
        rta_descripcion: "MINUTA DEL CONTRATO",
      },
      {
        rta_id: 523,
        rta_descripcion: "MINUTA MODIFICACION CONTRATO",
      },
      {
        rta_id: 524,
        rta_descripcion: "MODFIFICACION 1 CONTRATO",
      },
      {
        rta_id: 525,
        rta_descripcion: "MULTAS Y SANCIONES",
      },
      {
        rta_id: 526,
        rta_descripcion: "NOMINA",
      },
      {
        rta_id: 527,
        rta_descripcion: "NOTA ESTADOS CONTABLES",
      },
      {
        rta_id: 528,
        rta_descripcion: "NOTAS DEL POSGRADO CON PROMEDIO ACUMULADO",
      },
      {
        rta_id: 529,
        rta_descripcion: "NOTAS DEL PREGRADO CON PROMEDIO ACUMULADO",
      },
      {
        rta_id: 530,
        rta_descripcion: "NOTIFICACION",
      },
      {
        rta_id: 531,
        rta_descripcion: "NOTIFICACION DE CONDONACION",
      },
      {
        rta_id: 532,
        rta_descripcion: "NOTIFICACION DE RECEPCION DE DOCUMENTOS",
      },
      {
        rta_id: 533,
        rta_descripcion:
          "NOTIFICACION DE RESOLUCION DE CONDONACION ESTADO DEL CREDITO",
      },
      {
        rta_id: 534,
        rta_descripcion: "NOTIFICACION DE RETIRO",
      },
      {
        rta_id: 535,
        rta_descripcion: "NOTIFICACION DE SEGUIMIENTO",
      },
      {
        rta_id: 536,
        rta_descripcion: "NOTIFICACION PERSONAL",
      },
      {
        rta_id: 537,
        rta_descripcion: "NOTIFICACION POR AVISO",
      },
      {
        rta_id: 538,
        rta_descripcion: "NOTIFICACIONES DE CONDONACION O COBRO",
      },
      {
        rta_id: 539,
        rta_descripcion: "NOTIFICACIONES LABORALES",
      },
      {
        rta_id: 540,
        rta_descripcion: "OBSERVACIONES",
      },
      {
        rta_id: 541,
        rta_descripcion: "OBSERVACIONES A LA GUIA",
      },
      {
        rta_id: 542,
        rta_descripcion: "OBSERVACIONES A PLIEGOS",
      },
      {
        rta_id: 543,
        rta_descripcion: "OBSERVACIONES A PREPLIEGO",
      },
      {
        rta_id: 544,
        rta_descripcion: "OBSERVACIONES AL PROYECTO DE PLIEGOS",
      },
      {
        rta_id: 545,
        rta_descripcion: "OBSERVACIONES Y RESPUESTA AL PLIEGO",
      },
      {
        rta_id: 546,
        rta_descripcion: "OBSERVACIONES Y RESPUESTA AL PLIEGO DEFINITIVO",
      },
      {
        rta_id: 547,
        rta_descripcion:
          "OFERTA DE CUPOS Y PROGRAMAS DE LA CONVOCATORIA (CONSOLIDADO)",
      },
      {
        rta_id: 548,
        rta_descripcion: "OFICIO DE NOTIFICACION DE PAGO A LA UNIVERSIDAD",
      },
      {
        rta_id: 549,
        rta_descripcion: "ORDEN DE COMPRA",
      },
      {
        rta_id: 550,
        rta_descripcion: "ORDEN DE PAGO",
      },
      {
        rta_id: 551,
        rta_descripcion: "ORDEN DE PAGO MATRICULA",
      },
      {
        rta_id: 552,
        rta_descripcion: "ORDEN DE PAGO SOSTENIMIENTO",
      },
      {
        rta_id: 553,
        rta_descripcion: "OTRO SI",
      },
      {
        rta_id: 554,
        rta_descripcion: "OTRO SI/ MODIFICACION",
      },
      {
        rta_id: 555,
        rta_descripcion: "PACTO DE PAGO CON CARTERA",
      },
      {
        rta_id: 556,
        rta_descripcion: "PAGARE",
      },
      {
        rta_id: 557,
        rta_descripcion: "PAGO ANUAL SEGURIDAD SOCIAL",
      },
      {
        rta_id: 558,
        rta_descripcion: "PAGO POLIZA",
      },
      {
        rta_id: 559,
        rta_descripcion: "PAGO PUBLICACION GACETA",
      },
      {
        rta_id: 560,
        rta_descripcion: "PARAFISCALES",
      },
      {
        rta_id: 561,
        rta_descripcion: "PAZ Y SALVO",
      },
      {
        rta_id: 562,
        rta_descripcion: "PETICION",
      },
      {
        rta_id: 563,
        rta_descripcion: "PLAN",
      },
      {
        rta_id: 564,
        rta_descripcion:
          "PLAN  ANTICORRUPCION  Y  DE  ATENCION  AL CIUDADANO –PAAC-",
      },
      {
        rta_id: 565,
        rta_descripcion: "PLAN ANUAL DE ADQUISICIONES",
      },
      {
        rta_id: 566,
        rta_descripcion: "PLAN DE ACCION",
      },
      {
        rta_id: 567,
        rta_descripcion: "PLAN DE ACCION INSTITUCIONAL",
      },
      {
        rta_id: 568,
        rta_descripcion: "PLAN DE ACCION MIPG",
      },
      {
        rta_id: 569,
        rta_descripcion: "PLAN DE AUDITORIA",
      },
      {
        rta_id: 570,
        rta_descripcion: "PLAN DE CAPACITACIONES",
      },
      {
        rta_id: 571,
        rta_descripcion: "PLAN DE EMERGENCIAS",
      },
      {
        rta_id: 572,
        rta_descripcion: "PLAN DE MANEJO DE ANTICIPOS",
      },
      {
        rta_id: 573,
        rta_descripcion: "PLAN DE MEJORAMIENTO",
      },
      {
        rta_id: 574,
        rta_descripcion: "PLAN ESTRATEGICO",
      },
      {
        rta_id: 575,
        rta_descripcion: "PLANES ANUALES DE BIENESTAR",
      },
      {
        rta_id: 576,
        rta_descripcion: "PLANES DE AUDITORIAS DE CONTROL INTERNO",
      },
      {
        rta_id: 577,
        rta_descripcion:
          "PLANES DE PREVENCION, PREPARACION Y RESPUESTA ANTE EMERGENCIAS",
      },
      {
        rta_id: 578,
        rta_descripcion: "PLANES DE TRANSFERENCIAS DOCUMENTALES",
      },
      {
        rta_id: 579,
        rta_descripcion:
          "PLANES ESTRATEGICOS DE TECNOLOGIAS DE LA INFORMACION PETIC",
      },
      {
        rta_id: 580,
        rta_descripcion:
          "PLANES ESTRATEGICOS TECNOLOGIAS DE LA INFORMACION PETIC",
      },
      {
        rta_id: 581,
        rta_descripcion: "PLANES INSTITUCIONAL DE ARCHIVOS",
      },
      {
        rta_id: 582,
        rta_descripcion: "PLANILLA CONTROL DE TRANSPORTE DE FUNCIONARIOS",
      },
      {
        rta_id: 583,
        rta_descripcion: "PLANILLA DE PAGO DE LA SEGURIDAD SOCIAL",
      },
      {
        rta_id: 584,
        rta_descripcion: "PLANILLA DE RECEPCION DE PROPUESTA",
      },
      {
        rta_id: 585,
        rta_descripcion: "PLANOS",
      },
      {
        rta_id: 586,
        rta_descripcion: "PLANTA DE CARGOS",
      },
      {
        rta_id: 587,
        rta_descripcion: "PLIEGO DE CARGO",
      },
      {
        rta_id: 588,
        rta_descripcion: "PLIEGOS DEFINITIVOS",
      },
      {
        rta_id: 589,
        rta_descripcion: "PODER",
      },
      {
        rta_id: 590,
        rta_descripcion: "PODER POR ESCRITURA PUBLICA",
      },
      {
        rta_id: 591,
        rta_descripcion: "POLITICAS",
      },
      {
        rta_id: 592,
        rta_descripcion: "POLIZA",
      },
      {
        rta_id: 593,
        rta_descripcion: "POLIZA DE CUMPLIMIENTO",
      },
      {
        rta_id: 594,
        rta_descripcion: "POLIZAS DE SEGURO",
      },
      {
        rta_id: 595,
        rta_descripcion: "PQRS",
      },
      {
        rta_id: 596,
        rta_descripcion: "PREPLIEGO",
      },
      {
        rta_id: 597,
        rta_descripcion: "PRESENTACION",
      },
      {
        rta_id: 598,
        rta_descripcion: "PRESENTACION DE INDICADORES N/A",
      },
      {
        rta_id: 599,
        rta_descripcion: "PRESENTACION DE LA PROPUESTA DE TRABAJO DE GRADO",
      },
      {
        rta_id: 600,
        rta_descripcion: "PRESTACION DE SERVICIOS",
      },
      {
        rta_id: 601,
        rta_descripcion: "PROCEDIMIENTO CONTRATACION ",
      },
      {
        rta_id: 602,
        rta_descripcion: "PROCEDIMIENTO ORGANIZACION DE ARCHIVO CENTRAL",
      },
      {
        rta_id: 603,
        rta_descripcion: "PROCEDIMIENTO ORGANIZACION DE ARCHIVOS DE GESTION",
      },
      {
        rta_id: 604,
        rta_descripcion: "PROCEDIMIENTO PARA LAS AUDITORIAS INTERNAS",
      },
      {
        rta_id: 605,
        rta_descripcion: "PROCEDIMIENTO PQRS",
      },
      {
        rta_id: 606,
        rta_descripcion:
          "PROCEDIMIENTO RECEPCION Y RADICACION DE CORRESPONDENCIA",
      },
      {
        rta_id: 607,
        rta_descripcion: "PROCEDIMIENTOS",
      },
      {
        rta_id: 608,
        rta_descripcion: "PROCESO PASO AL COBRO",
      },
      {
        rta_id: 609,
        rta_descripcion:
          "PROCESOS CONTRACTUALES DECLARADOS DESIERTOS O NO ADJUDICADOS",
      },
      {
        rta_id: 610,
        rta_descripcion: "PROGRAMA ANUAL DE AUDITORIA",
      },
      {
        rta_id: 611,
        rta_descripcion: "PROGRAMA ANUAL MENSUALIZADO DE CAJA – PAC",
      },
      {
        rta_id: 612,
        rta_descripcion: "PROGRAMA DE GESTION DOCUMENTAL",
      },
      {
        rta_id: 613,
        rta_descripcion: "PROGRAMAS DE GESTION DOCUMENTAL",
      },
      {
        rta_id: 614,
        rta_descripcion: "PROPUESTA",
      },
      {
        rta_id: 615,
        rta_descripcion: "PROPUESTA DE CONVENIO",
      },
      {
        rta_id: 616,
        rta_descripcion: "PROPUESTA ECONOMICA",
      },
      {
        rta_id: 617,
        rta_descripcion: "PROPUESTA TECNICO ECONOMICA",
      },
      {
        rta_id: 618,
        rta_descripcion: "PRORROGA",
      },
      {
        rta_id: 619,
        rta_descripcion: "PRORROGA DE CONDONACION",
      },
      {
        rta_id: 620,
        rta_descripcion: "PRORROGA DEL CONTRATO",
      },
      {
        rta_id: 621,
        rta_descripcion: "PROYECTO PLIEGO DE CONDICIONES",
      },
      {
        rta_id: 622,
        rta_descripcion: "PRUEBAS",
      },
      {
        rta_id: 623,
        rta_descripcion: "PUBLICACION SECOP",
      },
      {
        rta_id: 624,
        rta_descripcion: "QUEJA",
      },
      {
        rta_id: 625,
        rta_descripcion: "RADICACION DEL PROYECTO",
      },
      {
        rta_id: 626,
        rta_descripcion: "RANKING DE CIUDAD",
      },
      {
        rta_id: 627,
        rta_descripcion: "RECIBO A SATISFACCION",
      },
      {
        rta_id: 628,
        rta_descripcion: "RECIBOS DE PAGO – (FORMULARIO 490)",
      },
      {
        rta_id: 629,
        rta_descripcion: "RECLAMACION POLIZA POR DAÑO",
      },
      {
        rta_id: 630,
        rta_descripcion: "RECLAMACIONES",
      },
      {
        rta_id: 631,
        rta_descripcion: "RECURSO",
      },
      {
        rta_id: 632,
        rta_descripcion: "RECURSO DE APELACION",
      },
      {
        rta_id: 633,
        rta_descripcion: "RECURSO DE REPOSICION",
      },
      {
        rta_id: 634,
        rta_descripcion: "REEMBOLSO",
      },
      {
        rta_id: 635,
        rta_descripcion: "REGISTRO CIVIL",
      },
      {
        rta_id: 636,
        rta_descripcion: "REGISTRO DE IDENTIFICACION TRIBUTARIA RIT",
      },
      {
        rta_id: 637,
        rta_descripcion: "REGISTRO DE MODIFICACIONES DEL PAC",
      },
      {
        rta_id: 638,
        rta_descripcion:
          "REGISTRO DE PRESTAMO Y CONSULTA DE DOCUMENTOS (TARJETA DE PRESTAMO)",
      },
      {
        rta_id: 639,
        rta_descripcion: "REGISTRO DE PROGRAMACION Y MANTENIMIENTO DE EQUIPOS",
      },
      {
        rta_id: 640,
        rta_descripcion: "REGISTRO FOTOGRAFICO",
      },
      {
        rta_id: 641,
        rta_descripcion: "REGISTRO PRESUPUESTAL",
      },
      {
        rta_id: 642,
        rta_descripcion: "REGISTRO SIET",
      },
      {
        rta_id: 643,
        rta_descripcion: "REGISTRO SNIES",
      },
      {
        rta_id: 644,
        rta_descripcion: "REGISTRO UNICO DE SERIES DOCUMENTALES - RUSD",
      },
      {
        rta_id: 645,
        rta_descripcion: "REGISTRO UNICO TRIBUTARIO RUT",
      },
      {
        rta_id: 646,
        rta_descripcion: "REGISTRO Y CONTROL DEL PAC",
      },
      {
        rta_id: 647,
        rta_descripcion: "REGISTROS AUDIOVISUALES",
      },
      {
        rta_id: 648,
        rta_descripcion: "REGISTROS COPIA DE SEGURIDAD",
      },
      {
        rta_id: 649,
        rta_descripcion: "REGISTROS DE OPERACIONES DE CAJA MEJOR",
      },
      {
        rta_id: 650,
        rta_descripcion: "REINTEGROS",
      },
      {
        rta_id: 651,
        rta_descripcion: "REMISION",
      },
      {
        rta_id: 652,
        rta_descripcion: "REMISION DESEMBOLSO",
      },
      {
        rta_id: 653,
        rta_descripcion: "REMISION ORDEN DE OPERACION",
      },
      {
        rta_id: 654,
        rta_descripcion: "REMISION POR COMPETENCIA",
      },
      {
        rta_id: 655,
        rta_descripcion: "REMISION PROYECTO DE ACUERDO",
      },
      {
        rta_id: 656,
        rta_descripcion: "RENDICION",
      },
      {
        rta_id: 657,
        rta_descripcion: "RENOVACIÓN EXTEMPORANEA",
      },
      {
        rta_id: 658,
        rta_descripcion: "RENUNCIA A BECAS MEJORES BACHILLERES",
      },
      {
        rta_id: 659,
        rta_descripcion: "RENUNCIAS",
      },
      {
        rta_id: 660,
        rta_descripcion: "REPORTE",
      },
      {
        rta_id: 661,
        rta_descripcion: "REPORTE ACADEMICO",
      },
      {
        rta_id: 662,
        rta_descripcion: "REPORTE DE ACTIVIDADES",
      },
      {
        rta_id: 663,
        rta_descripcion: "REPORTE DE AVANCE A LA GESTION",
      },
      {
        rta_id: 664,
        rta_descripcion: "REPORTE DE EVENTOS INSTITUCIONALES",
      },
      {
        rta_id: 665,
        rta_descripcion: "REPORTE DE INFORMACION EXOGENA DIAN",
      },
      {
        rta_id: 666,
        rta_descripcion:
          "REPORTE DE INFORMACION EXOGENA MUNICIPIO DE MEDELLIN - RETENCION DE ICA",
      },
      {
        rta_id: 667,
        rta_descripcion: "REPORTE DE VALORES ESTADISTICOS ",
      },
      {
        rta_id: 668,
        rta_descripcion: "REPORTE OFICIAL DE SOLICITUDES",
      },
      {
        rta_id: 669,
        rta_descripcion: "REPORTES PLAN INDICATIVO",
      },
      {
        rta_id: 670,
        rta_descripcion: "RESOLUCION APROBACION DE POLIZAS",
      },
      {
        rta_id: 671,
        rta_descripcion: "RESOLUCION DE ADJUDICACION",
      },
      {
        rta_id: 672,
        rta_descripcion: "RESOLUCION DE ADOPCION",
      },
      {
        rta_id: 673,
        rta_descripcion: "RESOLUCION DE APERTURA",
      },
      {
        rta_id: 674,
        rta_descripcion: "RESOLUCION DE APERTURA DE LA CONVOCATORIA",
      },
      {
        rta_id: 675,
        rta_descripcion: "RESOLUCION DE APERTURA DEL PROCESO",
      },
      {
        rta_id: 676,
        rta_descripcion: "RESOLUCION DE APROBACION DE TRD",
      },
      {
        rta_id: 677,
        rta_descripcion:
          "RESOLUCION DE CIERRE DE PROCESO Y RECEPCION DE PROPUESTAS",
      },
      {
        rta_id: 678,
        rta_descripcion: "RESOLUCION DE CONDONACION",
      },
      {
        rta_id: 679,
        rta_descripcion: "RESOLUCION DE CONDONACION DE BECA",
      },
      {
        rta_id: 680,
        rta_descripcion: "RESOLUCION DE CONDONACION ESTADO DE CREDITO",
      },
      {
        rta_id: 681,
        rta_descripcion: "RESOLUCION DE CONSOLIDACION",
      },
      {
        rta_id: 682,
        rta_descripcion:
          "RESOLUCION DE MODIFICACION DEL REGLAMENTO OPERATIVO DEL PROGRAMA BECAS TECNOLOGIAS",
      },
      {
        rta_id: 683,
        rta_descripcion: "RESOLUCION DE NOMBRAMIENTO",
      },
      {
        rta_id: 684,
        rta_descripcion: "RESOLUCION EMISION LISTA DE HABILITADOS",
      },
      {
        rta_id: 685,
        rta_descripcion: "RESOLUCION EMISION LISTA DE SELECCIONADOS",
      },
      {
        rta_id: 686,
        rta_descripcion: "RESOLUCION PARA DECLARACION DE PROCESO DESIERTO",
      },
      {
        rta_id: 687,
        rta_descripcion: "RESOLUCIONES",
      },
      {
        rta_id: 688,
        rta_descripcion: "RESOLUCIONES DE CONDONACION O COBRO",
      },
      {
        rta_id: 689,
        rta_descripcion: "RESOLUCIONES DE TERMINACION DE PROGRAMA",
      },
      {
        rta_id: 690,
        rta_descripcion: "RESOLUCUIN RESPUESTA",
      },
      {
        rta_id: 691,
        rta_descripcion: "RESPUESTA A OBSERVACIONES A PREPLIEGOS",
      },
      {
        rta_id: 692,
        rta_descripcion: "RESPUESTA A OBSERVACIONES A PROYECTO DE PLIEGO",
      },
      {
        rta_id: 693,
        rta_descripcion: "RESPUESTA A PREPLIEGOS",
      },
      {
        rta_id: 694,
        rta_descripcion: "RESPUESTA RECURSOS DE REPOSICION",
      },
      {
        rta_id: 695,
        rta_descripcion: "RESULTADO DE LA SUBASTA",
      },
      {
        rta_id: 696,
        rta_descripcion: "RESULTADOS PRUEBAS ICFES",
      },
      {
        rta_id: 697,
        rta_descripcion: "REVOCATORIA",
      },
      {
        rta_id: 698,
        rta_descripcion: "SEGUIMIENTO",
      },
      {
        rta_id: 699,
        rta_descripcion: "SEGUIMIENTO AL PAAC",
      },
      {
        rta_id: 700,
        rta_descripcion: "SEGUIMIENTO AUDITORES",
      },
      {
        rta_id: 701,
        rta_descripcion: "SEGUIMIENTOS AL PLAN DE ACCION MIPG",
      },
      {
        rta_id: 702,
        rta_descripcion: "SEGUIMIENTOS AL PLAN DE MEJORAMIENTO",
      },
      {
        rta_id: 703,
        rta_descripcion:
          "SENTENCIA CONDENATORIA EJECUTORIADA POR DELITOS CONSTITUTIVOS DE VIOLENCIA BASADA EN GENERO (VBG)",
      },
      {
        rta_id: 704,
        rta_descripcion: "SENTENCIA PRIMERA INSTANCIA",
      },
      {
        rta_id: 705,
        rta_descripcion: "SERVICIO SOCIAL",
      },
      {
        rta_id: 706,
        rta_descripcion: "SIMULACRO DE SUBASTA",
      },
      {
        rta_id: 707,
        rta_descripcion: "SOLICITUD",
      },
      {
        rta_id: 708,
        rta_descripcion: "SOLICITUD APLAZAMIENTO BECAS MEJORES BACHILLERES",
      },
      {
        rta_id: 709,
        rta_descripcion: "SOLICITUD APLAZAR O ADELANTAR SERVICIO SOCIAL ",
      },
      {
        rta_id: 710,
        rta_descripcion: "SOLICITUD BECA",
      },
      {
        rta_id: 711,
        rta_descripcion: "SOLICITUD CAMBIO DE PROGRAMA Y O  UNIVERSIDAD ",
      },
      {
        rta_id: 712,
        rta_descripcion: "SOLICITUD CESANTIAS",
      },
      {
        rta_id: 713,
        rta_descripcion: "SOLICITUD CONDONACION CREDITO",
      },
      {
        rta_id: 714,
        rta_descripcion:
          "SOLICITUD DE AMPLIACION DE PLAZO Y/O REESTRUCTURACION",
      },
      {
        rta_id: 715,
        rta_descripcion: "SOLICITUD DE APROVECHAMIENTO DEL TIEMPO LIBRE",
      },
      {
        rta_id: 716,
        rta_descripcion: "SOLICITUD DE AUTORIZACION",
      },
      {
        rta_id: 717,
        rta_descripcion: "SOLICITUD DE CONCEPTO",
      },
      {
        rta_id: 718,
        rta_descripcion: "SOLICITUD DE CONDONACION",
      },
      {
        rta_id: 719,
        rta_descripcion: "SOLICITUD DE CONDONACION DE CREDITO",
      },
      {
        rta_id: 720,
        rta_descripcion: "SOLICITUD DE COTIZACIONES",
      },
      {
        rta_id: 721,
        rta_descripcion: "SOLICITUD DE ESPACIO",
      },
      {
        rta_id: 722,
        rta_descripcion: "SOLICITUD DE GIROS ADICIONALES",
      },
      {
        rta_id: 723,
        rta_descripcion: "SOLICITUD DE INFORMACIÓN",
      },
      {
        rta_id: 724,
        rta_descripcion: "SOLICITUD DE LEGALIZACION",
      },
      {
        rta_id: 725,
        rta_descripcion: "SOLICITUD DE PAGO INTERSEMESTRALES",
      },
      {
        rta_id: 726,
        rta_descripcion: "SOLICITUD DE PRORROGA",
      },
      {
        rta_id: 727,
        rta_descripcion: "SOLICITUD DE REFINANCIACION",
      },
      {
        rta_id: 728,
        rta_descripcion: "SOLICITUD DE RENOVACION",
      },
      {
        rta_id: 729,
        rta_descripcion: "SOLICITUD DE RESPALDOS Y RECUPERACION",
      },
      {
        rta_id: 730,
        rta_descripcion:
          "SOLICITUD DE REVERSION DE RENOVACIONES O LEGALIZACIONES",
      },
      {
        rta_id: 731,
        rta_descripcion: "SOLICITUD DE REVOCATORIA",
      },
      {
        rta_id: 732,
        rta_descripcion: "SOLICITUD DE SUSPENSION",
      },
      {
        rta_id: 733,
        rta_descripcion: "SOLICITUD DE SUSPENSION VOLUNTARIAS O ESPECIALES",
      },
      {
        rta_id: 734,
        rta_descripcion: "SOLICITUD DE VACACIONES",
      },
      {
        rta_id: 735,
        rta_descripcion: "SOLICITUD DEL PAC",
      },
      {
        rta_id: 736,
        rta_descripcion: "SOLICITUD EXPEDIENTE CONTRACTUAL",
      },
      {
        rta_id: 737,
        rta_descripcion: "SOLICITUD MODIFICACION ",
      },
      {
        rta_id: 738,
        rta_descripcion: "SOLICITUD POR INCUMPLIMIENTO",
      },
      {
        rta_id: 739,
        rta_descripcion: "SOLICITUD REESTRUCTURACION",
      },
      {
        rta_id: 740,
        rta_descripcion: "SOLICITUD RENOVACION BECAS MEJORES BACHILLERES",
      },
      {
        rta_id: 741,
        rta_descripcion: "SOLICITUD SERVICIO DE TRANSPORTE",
      },
      {
        rta_id: 742,
        rta_descripcion: "SOLICITUD TIEMPO DE GRACIA",
      },
      {
        rta_id: 743,
        rta_descripcion: "SOLICITUDES DE CERTIFICACIONES",
      },
      {
        rta_id: 744,
        rta_descripcion: "SOLICITUDES DE CONDONACION Y ANEXOS",
      },
      {
        rta_id: 745,
        rta_descripcion: "SOLICITUDES DE SERVICIO DE SOPORTE TECNICO",
      },
      {
        rta_id: 746,
        rta_descripcion: "SOLICITUDES, QUEJAS Y DERECHOS DE PETICION",
      },
      {
        rta_id: 747,
        rta_descripcion: "SOPORTE DE PAGO",
      },
      {
        rta_id: 748,
        rta_descripcion: "SOPORTES CONTABLES Y/U HOJAS DE TRABAJO",
      },
      {
        rta_id: 749,
        rta_descripcion: "SOSTENIMIENTO",
      },
      {
        rta_id: 750,
        rta_descripcion: "SUGERENCIAS",
      },
      {
        rta_id: 751,
        rta_descripcion: "SUSPENSION TEMPORAL",
      },
      {
        rta_id: 752,
        rta_descripcion: "TABLAS DE RETENCION DOCUMENTAL",
      },
      {
        rta_id: 753,
        rta_descripcion: "TARJETA PROFESIONAL",
      },
      {
        rta_id: 754,
        rta_descripcion: "TERMINACION ANTICIPADA",
      },
      {
        rta_id: 755,
        rta_descripcion: "TERMINACION DE CREDITO",
      },
      {
        rta_id: 756,
        rta_descripcion: "TITULOS VALORES (PAGARE Y CARTA DE INSTRUCCIONES)",
      },
      {
        rta_id: 757,
        rta_descripcion: "TRANSFERENCIA PROYECTOS INVERSION",
      },
      {
        rta_id: 758,
        rta_descripcion: "TRASFERENCIA PROYECTOS FUNCIONAMIENTO AGENCIA",
      },
      {
        rta_id: 759,
        rta_descripcion: "VALIDACION",
      },
      {
        rta_id: 760,
        rta_descripcion: "VERIFICACION DE IDONEIDAD Y ANEXOS",
      },
      {
        rta_id: 761,
        rta_descripcion: "VIGENCIAS FUTURAS",
      },
    ]);
  }
}
