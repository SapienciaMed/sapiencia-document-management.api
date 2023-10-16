import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasOne,
  belongsTo,
  column,
  hasOne,
} from "@ioc:Adonis/Lucid/Orm";
import RadicadoDetail from "./RadicadoDetail";

export default class RelatedAnswer extends BaseModel {
  public static table = "RRR_RESPUESTAS_RELACIONADAS";

  @column({ columnName: "RRR_CODIGO", isPrimary: true })
  public rrr_codigo: number;

  @column({ columnName: "RRR_ID_RADICADO" })
  public rrr_id_radicado: string;

  @column({ columnName: "RRR_ID_RESPUESTAS_RELACIONADAS" })
  public rrr_id_respuestas_relacionadas: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => RadicadoDetail, {
    localKey: "rrr_id_radicado",
    foreignKey: "dra_radicado",
  })
  public rn_related_answer_to_radicado_detail: BelongsTo<typeof RadicadoDetail>;

  @hasOne(() => RadicadoDetail, {
    localKey: "rrr_id_respuestas_relacionadas",
    foreignKey: "dra_radicado",
  })
  public rn_related_answer_to_radicado_detail_respuestas: HasOne<
    typeof RadicadoDetail
  >;
}
