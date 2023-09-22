import { IGeneralConfiguration, IGeneralConfigurationTemp } from "App/Interfaces/GeneralConfigurationInterfaces";
import GeneralConfigurations from "../Models/GeneralConfiguration";
import { TransactionClientContract } from "@ioc:Adonis/Lucid/Database";

export interface IGeneralConfigurationRepository {
  getGeneralConfiguration(): Promise<IGeneralConfiguration[] | null>;
  getGeneralConfigurationById(id: number): Promise<IGeneralConfiguration | null>;
  createGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, trx: TransactionClientContract): Promise<IGeneralConfiguration>;
  updateGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, id: number, trx: TransactionClientContract): Promise<IGeneralConfiguration | null>;
}

export default class GeneralConfigurationRepository implements IGeneralConfigurationRepository {

  async getGeneralConfiguration(): Promise<IGeneralConfiguration[] | null> {
    const res = await GeneralConfigurations.query().orderBy('id', 'asc');
    return res ? (res) : null;
  }

  async getGeneralConfigurationById(id: number): Promise<IGeneralConfiguration | null> {
    const res = await GeneralConfigurations.find(id);
    return res ? (res.serialize() as IGeneralConfiguration) : null;
  }

  async createGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, trx: TransactionClientContract): Promise<IGeneralConfiguration> {
    const toCreate = new GeneralConfigurations();
    if (GeneralConfiguration?.id !== undefined) {
      toCreate.id = GeneralConfiguration.id;
    }
    toCreate.fill(GeneralConfiguration);
    toCreate.useTransaction(trx);
    await toCreate.save();
    return toCreate.serialize() as IGeneralConfiguration;
  }

  async updateGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, id: number, trx: TransactionClientContract): Promise<IGeneralConfiguration | null> {
    const toUpdate = await GeneralConfigurations.find(id);
    if (!toUpdate) {
      return null;
    }

    toUpdate.fill({
      ...toUpdate.$attributes,
      ...GeneralConfiguration
    });
    toUpdate.useTransaction(trx);
    await toUpdate.save();
    return toUpdate.serialize() as IGeneralConfiguration;
  }
}
