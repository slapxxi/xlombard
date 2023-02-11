import { ReactElement } from 'react';

export function isComponentType<Component extends (...args: any) => any>(
  node: React.ReactNode,
  component: Component,
): node is ReactElement<Parameters<Component>[0], Component> {
  if (node && typeof node === 'object' && 'type' in node && node.type === component) {
    return true;
  }
  return false;
}
