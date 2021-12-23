import AppEntry from "../Router/Entry";
import SagaModule from './Module';
import { sagaRouter } from "./Router";

function loadSagaSource(route: string): Array<NodeRequire> {
  const source = route === AppEntry.Default ? Object.keys(SagaModule) : sagaRouter[route];
  return source.map(saga => require(saga.indexOf('./') ? saga : `/${saga}/`));
}

export function getSagaModules(entry: string | undefined) {
  return loadSagaSource(entry ? entry : AppEntry.Default);
}