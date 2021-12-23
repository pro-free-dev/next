import AppEntry from "../Router/Entry";
import { ArrayObject } from "../Types/Types";
import SagaModule from "./Module";

// 分页面加载时需要指定待加载的saga logic
export const sagaRouter: ArrayObject = {
  [AppEntry.Home]: [SagaModule.Home, SagaModule.Saseme, SagaModule.Product],
  [AppEntry.List]: [SagaModule.Home, SagaModule.Saseme, SagaModule.Product],
  [AppEntry.OrderDetail]: [SagaModule.Home, SagaModule.Saseme, SagaModule.Product],
}