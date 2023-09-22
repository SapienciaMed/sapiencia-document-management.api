import {IGeneralConfiguration, IGeneralConfigurationTemp } from "App/Interfaces/GeneralConfigurationInterfaces";
import { IGeneralConfigurationRepository } from "App/Repositories/GeneralConfigurationRepository";
import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "../Constants/ResponseCodesEnum";
import { TransactionClientContract } from "@ioc:Adonis/Lucid/Database";

export interface IGeneralConfigurationService {
  getGeneralConfiguration(): Promise<ApiResponse<IGeneralConfiguration[]>>;
  getGeneralConfigurationById(id: number): Promise<ApiResponse<IGeneralConfiguration>>;
  createGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, trx: TransactionClientContract): Promise<ApiResponse<IGeneralConfiguration>>;
  updateGeneralConfiguration(GeneralConfiguration: IGeneralConfigurationTemp, id: number, trx: TransactionClientContract): Promise<ApiResponse<IGeneralConfiguration>>
}

export default class GeneralConfigurationService implements IGeneralConfigurationService {
  constructor(
    private GeneralConfigurationtRepository: IGeneralConfigurationRepository,
  ) {}

  async getGeneralConfiguration(): Promise<ApiResponse<IGeneralConfiguration[]>> {
    const res = await this.GeneralConfigurationtRepository.getGeneralConfiguration();

    if (!res) {
      return new ApiResponse(
        {} as IGeneralConfiguration[],
        EResponseCodes.FAIL,
        "Registro no encontrado"
      );
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getGeneralConfigurationById(id: number): Promise<ApiResponse<IGeneralConfiguration>> {
    const res = await this.GeneralConfigurationtRepository.getGeneralConfigurationById(id);

    if (!res) {
      return new ApiResponse(
        {} as IGeneralConfiguration,
        EResponseCodes.FAIL,
        "Registro no encontrado"
      );
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async createGeneralConfiguration(GeneralConfigurationt: IGeneralConfigurationTemp, trx: TransactionClientContract): Promise<ApiResponse<IGeneralConfiguration>> {
    const GeneralConfigurationtCreate = await this.GeneralConfigurationtRepository.createGeneralConfiguration(GeneralConfigurationt, trx);
    return new ApiResponse(GeneralConfigurationtCreate, EResponseCodes.OK);
  }

  async updateGeneralConfiguration(GeneralConfigurationt: IGeneralConfigurationTemp, id: number, trx: TransactionClientContract): Promise<ApiResponse<IGeneralConfiguration>> {
    const res = await this.GeneralConfigurationtRepository.updateGeneralConfiguration(GeneralConfigurationt, id, trx);
    if (!res) {
      return new ApiResponse(
        {} as IGeneralConfiguration,
        EResponseCodes.FAIL,
        "El registro indicado no existe"
      );
    }
    return new ApiResponse(res, EResponseCodes.OK);
  }
}
