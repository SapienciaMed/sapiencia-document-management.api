import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import BasicDocumentInformation from "App/Models/BasicDocumentInformation";

export default class extends BaseSeeder {
  public async run() {
    await BasicDocumentInformation.createMany([
      { inf_codigo_asunto: 1, inf_nombre_asunto: "ACTAS", inf_unidad: "Días", inf_timepo_respuesta: '15', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 2, inf_nombre_asunto :'ACTAS COMITE FORMACION AVANZADA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 3, inf_nombre_asunto :'ACTAS DE COMITE ANTITRAMITES Y DE GOBIERNO EN LINEA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 4, inf_nombre_asunto :'ACTAS DE COMITE ARTICULADOR DE PRESUPUESTO PARTICIPATIVO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 5, inf_nombre_asunto :'ACTAS DE COMITE CASOS ESPECIALES DEL FONDO MEDELLIN EPM', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 6, inf_nombre_asunto :'ACTAS DE COMITE DE BIENES MUEBLES E INMUEBLES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 7, inf_nombre_asunto :'ACTAS DE COMITE DE CARTERA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 8, inf_nombre_asunto :'ACTAS DE COMITE DE CONCILIACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 9, inf_nombre_asunto :'ACTAS DE COMITE DE CONTRATACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 10, inf_nombre_asunto :'ACTAS DE COMITE DE CONVIVENCIA LABORAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 11, inf_nombre_asunto :'ACTAS DE COMITE DE COORDINACION DEL SISTEMA DE CONTROL INTERNO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 12, inf_nombre_asunto :'ACTAS DE COMITE DE INVERSIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 13, inf_nombre_asunto :'ACTAS DE COMITE INSTITUCIONAL DE GESTION Y DESEMPEÑO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 14, inf_nombre_asunto :'ACTAS DE COMITE INTERNO DE ARCHIVO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 15, inf_nombre_asunto :'ACTAS DE COMITE PARITARIO DE SEGURIDAD Y SALUD EN EL TRABAJO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 16, inf_nombre_asunto :'ACTAS DE COMITE TECNICO ASESOR DEL PROGRAMA EXTENDIENDO FRONTERAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 17, inf_nombre_asunto :'ACTAS DE COMITE TECNICO ASESOR DEL PROYECTO BECAS TECNOLOGIAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 18, inf_nombre_asunto :'ACTAS DE COMITE TECNICO ASESOR PROGRAMA MEJORES BACHILLERES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 19, inf_nombre_asunto :'ACTAS DE COMITE TECNICO DE SOSTENIBILIDAD CONTABLE', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 20, inf_nombre_asunto :'ACTAS DE CONSEJO DIRECTIVO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 21, inf_nombre_asunto :'ACTAS DE ELIMINACION DOCUMENTAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 22, inf_nombre_asunto :'ACTAS DE GRUPO DIRECTIVO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 23, inf_nombre_asunto :'ACTAS DE GRUPO PRIMARIO ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 24, inf_nombre_asunto :'ACTAS DE LA JUNTA ADMINISTRADORA DE ENLAZA MUNDOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 25, inf_nombre_asunto :'ACTAS DE LA JUNTA DE ADMINISTRACION FONDO CAMINO A LA EDUCACION SUPERIOR', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 26, inf_nombre_asunto :'ACTAS DE LA JUNTA DE ADMINISTRACION FONDO COMUNA 1', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 27, inf_nombre_asunto :'ACTAS DE POSESION', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 28, inf_nombre_asunto :'ACUERDO DE VOLUNTADES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 29, inf_nombre_asunto :'ACUERDOS DE CONSEJO DIRECTIVO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 30, inf_nombre_asunto :'ANTEPROYECTOS DE PRESUPUESTO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 31, inf_nombre_asunto :'AUTORIZACIÓN', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 32, inf_nombre_asunto :'BANCOS TERMINOLOGICOS DE SERIES Y SUBSERIES DOCUMENTALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 33, inf_nombre_asunto :'BECAS TECNOLOGÍAS ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 34, inf_nombre_asunto :'BOLETINES OBSERVATORIO DE EDUCACION SUPERIOR DE MEDELLIN', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 35, inf_nombre_asunto :'CARTAS DE INTENCION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 36, inf_nombre_asunto :'CERTIFICADO REGISTRO PRESUPUESTAL', inf_timepo_respuesta: '15', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 37, inf_nombre_asunto :'CIRCULARES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 38, inf_nombre_asunto :'COMPROBANTES CONTABLES DE AJUSTES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 39, inf_nombre_asunto :'COMPROBANTES CONTABLES DE EGRESO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 40, inf_nombre_asunto :'COMPROBANTES CONTABLES DE INGRESO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 41, inf_nombre_asunto :'COMPROBANTES DE EGRESOS', inf_timepo_respuesta: '30', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 42, inf_nombre_asunto :'COMUNICACIÓN EXTERNA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 43, inf_nombre_asunto :'COMUNICACIÓN INTERNA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 44, inf_nombre_asunto :'COMUNICACION RECIBIDA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 45, inf_nombre_asunto :'COMUNICACIONES  OFICIALES ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 46, inf_nombre_asunto :'CONCEPTOS JURIDICOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 47, inf_nombre_asunto :'CONCILIACIONES BANCARIAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 48, inf_nombre_asunto :'CONSECUTIVO DE COMUNICACIONES OFICIALES EXTERNAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 49, inf_nombre_asunto :'CONSECUTIVO DE COMUNICACIONES OFICIALES INTERNAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 50, inf_nombre_asunto :'CONSECUTIVO DE COMUNICACIONES OFICIALES RECIBIDAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 51, inf_nombre_asunto :'CONTRATO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 52, inf_nombre_asunto :'CONTRATO DE FIDUCIA O ENCARGO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 53, inf_nombre_asunto :'CONTRATO DE INTERVENTORIA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 54, inf_nombre_asunto :'CONTRATO INTERADMINISTRATIVO ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 55, inf_nombre_asunto :'CONTRATOS DE ARRENDAMIENTO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 56, inf_nombre_asunto :'CONTRATOS DE COMODATO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 57, inf_nombre_asunto :'CONTRATOS DE COMPRAVENTA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 58, inf_nombre_asunto :'CONTRATOS DE CONSULTORIA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 59, inf_nombre_asunto :'CONTRATOS DE FIDUCIA O ENCARGO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 60, inf_nombre_asunto :'CONTRATOS DE INTERVENTORIA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 61, inf_nombre_asunto :'CONTRATOS DE OBRA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 62, inf_nombre_asunto :'CONTRATOS DE PRESTACION DE SERVICIOS', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 63, inf_nombre_asunto :'CONTRATOS DE SUMINISTROS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 64, inf_nombre_asunto :'CONVENIO NTERADMINISTRATIVO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 65, inf_nombre_asunto :'CONVENIOS DE ASOCIACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 66, inf_nombre_asunto :'CONVENIOS INTERADMINISTRATIVOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 67, inf_nombre_asunto :'CONVOCATORIAS BECAS TECNOLOGIAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 68, inf_nombre_asunto :'CONVOCATORIAS RUTAS FORMATIVAS TALENTO ESPECIALIZADO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 69, inf_nombre_asunto :'DECLARACIONES DE CONTRIBUCION ESPECIAL OBRA PUBLICA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 70, inf_nombre_asunto :'DECLARACIONES DE ESTAMPILLA PROCULTURA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 71, inf_nombre_asunto :'DECLARACIONES DE INGRESOS Y PATRIMONIOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 72, inf_nombre_asunto :'DECLARACIONES DE RETENCION DE ICA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 73, inf_nombre_asunto :'DECLARACIONES DE RETENCION EN LA FUENTE POR RENTA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 74, inf_nombre_asunto :'ESQUEMA DE PUBLICACION DE INFORMACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 75, inf_nombre_asunto :'ESTADOS FINANCIEROS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 76, inf_nombre_asunto :'ESTUDIOS ESTADISTICOS OBSERVATORIO DE EDUCACION SUPERIOR', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 77, inf_nombre_asunto :'EXTENDIENDO FRONTERAS EDUCATIVAS', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 78, inf_nombre_asunto :'EXTRACTOS BANCARIOS', inf_timepo_respuesta: '1', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 79, inf_nombre_asunto :'FACTURA IES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 80, inf_nombre_asunto :'FONDO ENLAZA MUNDOS', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 81, inf_nombre_asunto :'FONDO EXTENDIENDO FRONTERAS EDUCATIVAS ', inf_timepo_respuesta: '20', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 82, inf_nombre_asunto :'FONDO FORMACION AVANZADA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 83, inf_nombre_asunto :'FONDO MEDELLIN EPM', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 84, inf_nombre_asunto :'FONDO MEJORES BACHILLERES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 85, inf_nombre_asunto :'HISTORIALES DE EQUIPOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 86, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS BECAS MEJORES BACHILLERES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 87, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS BECAS MEJORES DEPORTISTAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 88, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS BECAS TECNOLOGIAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 89, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS FONDO ENLAZA MUNDOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 90, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS FONDO EXTENDIENDO FRONTERAS EDUCATIVAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 91, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS FONDO FORMACION AVANZADA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 92, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS FONDO MEDELLIN EPM UNIVERSIDADES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 93, inf_nombre_asunto :'HISTORIAS DE BENEFICIARIOS FONDO PRESUPUESTO PARTICIPATIVO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 94, inf_nombre_asunto :'HISTORIAS LABORALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 95, inf_nombre_asunto :'INDICE DE INFORMACION CLASIFICADA Y RESERVADA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 96, inf_nombre_asunto :'INFORMES   ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 97, inf_nombre_asunto :'INFORMES A ENTES DE CONTROL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 98, inf_nombre_asunto :'INFORMES CONTABLE', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 99, inf_nombre_asunto :'INFORMES DE AUDIENCIA PUBLICA DE RENDICION DE CUENTAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 100, inf_nombre_asunto :'INFORMES DE AUSTERIDAD EN EL GASTO PUBLICO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 101, inf_nombre_asunto :'INFORMES DE EJECUCION PRESUPUESTAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 102, inf_nombre_asunto :'INFORMES DE ENCUESTA DE SATISFACCION DE ATENCION AL CIUDADANO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 103, inf_nombre_asunto :'INFORMES DE EVALUACION DEL MODELO INTEGRADO DE PLANEACION Y GESTION (MIPG)', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 104, inf_nombre_asunto :'INFORMES DE GESTION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 105, inf_nombre_asunto :'INFORMES DE GESTION INSTITUCIONAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 106, inf_nombre_asunto :'INFORMES DE PQRSDF', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 107, inf_nombre_asunto :'INFORMES DE SEGUIMIENTO A PQRSDF', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 108, inf_nombre_asunto :'INFORMES DE SEGUIMIENTO AL MAPA DE RIESGOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 109, inf_nombre_asunto :'INFORMES DE SEGUIMIENTO AL PLAN ANTICORRUPCION Y ATENCION AL CIUDADANO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 110, inf_nombre_asunto :'INFORMES PORMENORIZADO DEL ESTADO DE CONTROL INTERNO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 111, inf_nombre_asunto :'INSTRUMENTOS DE CONTROL DE TRANSPORTE', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 112, inf_nombre_asunto :'INSTRUMENTOS DE CONTROL DE VIGILANCIA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 113, inf_nombre_asunto :'INSTRUMENTOS DE CONTROL DESCRIPCION Y CONSULTA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 114, inf_nombre_asunto :'INSTRUMENTOS DE CONTROL GESTION DE COMUNICACIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 115, inf_nombre_asunto :'INSTRUMENTOS DE CONTROL TIC', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 116, inf_nombre_asunto :'INVENTARIOS DE BIENES MUEBLES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 117, inf_nombre_asunto :'INVENTARIOS DOCUMENTALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 118, inf_nombre_asunto :'LIBRO DIARIO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 119, inf_nombre_asunto :'LIBRO MAYOR DE BALANCE', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 120, inf_nombre_asunto :'LIBROS CONTABLES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 121, inf_nombre_asunto :'MANUALES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 122, inf_nombre_asunto :'MANUALES DE ATENCION AL CIUDADANO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 123, inf_nombre_asunto :'MANUALES DE CONTRATACION Y SUPERVISION E INTERVENTORIA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 124, inf_nombre_asunto :'MANUALES DE EMERGENCIAS Y CONTINGENCIAS DEL SG-SST', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 125, inf_nombre_asunto :'MANUALES DE GESTION DEL RIESGO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 126, inf_nombre_asunto :'MANUALES DE IDENTIDAD CORPORATIVA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 127, inf_nombre_asunto :'MANUALES DE LA METODOLOGIA DE ASIGNACION DE PERTINENCIA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 128, inf_nombre_asunto :'MANUALES DE PROCEDIMIENTOS DEL BANCO DE PROYECTOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 129, inf_nombre_asunto :'MANUALES DE RECUPERACION DE CARTERA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 130, inf_nombre_asunto :'MANUALES DEL PROCESO ACCESO Y PERMANENCIA A LA EDUCACION SUPERIOR', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 131, inf_nombre_asunto :'MANUALES ESPECIFICOS DE FUNCIONES Y COMPETENCIAS LABORALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 132, inf_nombre_asunto :'MANUALES PARA EL MANEJO DE LA BATERIA DE INDICADORES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 133, inf_nombre_asunto :'MANUALES PARA EL MODELO PREDICTIVO DE DESERCION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 134, inf_nombre_asunto :'MEMORANDO DE ENTENDIMIENTO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 135, inf_nombre_asunto :'MEMORANDOS DE ENTENDIMIENTO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 136, inf_nombre_asunto :'NOMINA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 137, inf_nombre_asunto :'ORDEN DE COMPRA', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 138, inf_nombre_asunto :'ORDENES DE COMPRA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 139, inf_nombre_asunto :'PETICIONES, QUEJAS,RECLAMOS, SUGERENCIAS, DENUNCIAS Y FELICTACIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 140, inf_nombre_asunto :'PLAN DE ACCION', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 141, inf_nombre_asunto :'PLANES ANTICORRUPCION Y  DE ATENCION AL CIUDADANO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 142, inf_nombre_asunto :'PLANES ANUALES DE ADQUISICIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 143, inf_nombre_asunto :'PLANES ANUALES DE BIENESTAR', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 144, inf_nombre_asunto :'PLANES DE ACCION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 145, inf_nombre_asunto :'PLANES DE ACCION INSTITUCIONALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 146, inf_nombre_asunto :'PLANES DE AUDITORIAS AL SISTEMA DE GESTION INTEGRAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 147, inf_nombre_asunto :'PLANES DE AUDITORIAS DE CONTROL INTERNO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 148, inf_nombre_asunto :'PLANES DE COMUNICACIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 149, inf_nombre_asunto :'PLANES DE GESTION DEL RIESGO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 150, inf_nombre_asunto :'PLANES DE MEJORAMIENTO INSTITUCIONAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 151, inf_nombre_asunto :'PLANES DE PREVENCION, PREPARACION Y RESPUESTA ANTE EMERGENCIAS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 152, inf_nombre_asunto :'PLANES DE SEGUIMIENTO MIPG', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 153, inf_nombre_asunto :'PLANES DE TRANSFERENCIAS DOCUMENTALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 154, inf_nombre_asunto :'PLANES ESTRATEGICOS DE TALENTO HUMANO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 155, inf_nombre_asunto :'PLANES ESTRATEGICOS DE TECNOLOGIAS DE LA INFORMACION - PETIC', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 156, inf_nombre_asunto :'PLANES ESTRATEGICOS INSTITUCIONALES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 157, inf_nombre_asunto :'PLANES INDICATIVOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 158, inf_nombre_asunto :'PLANES INSTITUCIONAL DE ARCHIVOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 159, inf_nombre_asunto :'PLANES INSTITUCIONALES DE CAPACITACIONES', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 160, inf_nombre_asunto :'PQRSDF', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 161, inf_nombre_asunto :'PRESUPUESTO PARTICIPATIVO', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 162, inf_nombre_asunto :'PROCEDIMIENTOS ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 163, inf_nombre_asunto :'PROCESOS CONTENCIOSOS ADMINISTRATIVOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 164, inf_nombre_asunto :'PROCESOS CONTRACTUALES DECLARADOS DESIERTOS O NO ADJUDICADOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 165, inf_nombre_asunto :'PROCESOS DEL SISTEMA DE GESTION INTEGRAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 166, inf_nombre_asunto :'PROCESOS DISCIPLINARIOS', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 167, inf_nombre_asunto :'PROGRAMAS ANUALES DE AUDITORIAS DE CONTROL INTERNO', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 168, inf_nombre_asunto :'PROGRAMAS ANUALES DE AUDITORIAS DEL SISTEMA DE GESTION INTEGRAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 169, inf_nombre_asunto :'PROGRAMAS ANUALES MENSUALIZADOS DE CAJA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 170, inf_nombre_asunto :'PROGRAMAS DE GESTION DOCUMENTAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 171, inf_nombre_asunto :'PROGRAMAS DE INDUCCION Y REINDUCCION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 172, inf_nombre_asunto :'PROGRAMAS DE RESPALDO DE INFORMACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 173, inf_nombre_asunto :'PROGRAMAS DE VIGILANCIA EPIDEMIOLOGICA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 174, inf_nombre_asunto :'PROYECTOS DE INVERSION PUBLICA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 175, inf_nombre_asunto :'RECURSO DE REPOSICIÓN  ', inf_timepo_respuesta: '60', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 176, inf_nombre_asunto :'REGISTRO DE ACTIVOS DE INFORMACION', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 177, inf_nombre_asunto :'REGISTROS DE OPERACIONES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 178, inf_nombre_asunto :'REPORTE DE AVANCE A LA GESTION - FURAG', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 179, inf_nombre_asunto :'REPORTE DE INFORMACION EXOGENA DIAN', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 180, inf_nombre_asunto :'REPORTE DE INFORMACION EXOGENA MUNICIPIO DE MEDELLIN - RETENCION DE ICA', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 181, inf_nombre_asunto :'RESOLUCIONES', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 182, inf_nombre_asunto :'REVOCATORIA DE RESOLUCIÓN', inf_timepo_respuesta: '60', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 183, inf_nombre_asunto :'SOLICITUDES ', inf_timepo_respuesta: '15', inf_unidad: 'Días', inf_tipo: 1, inf_prioridad: 1 },
      { inf_codigo_asunto: 184, inf_nombre_asunto :'TABLAS DE RETENCION DOCUMENTAL', inf_timepo_respuesta: '50', inf_unidad: 'Minutos', inf_tipo: 1, inf_prioridad: 1 },

    ]);
  }
}
