import m from 'mithril';
import { IDocumentationData } from '..';
import { Table, Popover } from '@/';
import { ITsInterface, ITsProperty, Kind } from '@documentalist/client';

export interface IInterfaceTableAttrs {
  data: IDocumentationData;
  api: string;
}

export function InterfaceTable(attrs: IInterfaceTableAttrs) {
  const { api, data } = attrs;
  const interfaceProps = (data.docs.typescript[api] as ITsInterface).properties;

  return m(Table, { class: 'Docs-interface-table' }, [
    m('tr', [
      m('th[style=max-width:175px; min-width: 175px]', 'Name'),
      m('th', 'Description')
    ]),
    interfaceProps.map(prop => renderPropRow(prop, data))
  ]);
}

function renderPropRow(prop: ITsProperty, data: IDocumentationData) {
  if (prop.documentation == null) {
    return;
  }

  const isRequired = prop.flags && !prop.flags.isOptional;

  return m('tr', [
    m('td', m('code', { class: isRequired ? 'is-required' : undefined }, prop.name)),
    m('td', [
      m('', renderPropType(prop, data)),
      m.trust(prop.documentation.contentsRaw)
    ])
  ]);
}

function renderPropType(prop: ITsProperty, data: IDocumentationData) {
  const { type, defaultValue } = prop;
  const typeDetails = data.docs.typescript[type];

  const isPopover = typeDetails && (typeDetails.kind === Kind.TypeAlias || typeDetails.kind === Kind.Enum);

  const trigger = m('.Docs-interface-type', { class: isPopover ? 'is-popover' : undefined }, [
    type,
    defaultValue && ` = ${defaultValue}`
  ]);

  return isPopover
    ? m(Popover, {
      class: 'Docs-interface-popover',
      content: [
        typeDetails.kind === Kind.Enum && typeDetails.members.map((member, index) => [
          m('span.Docs-interface-member', `${member.defaultValue}`),
          (index !== typeDetails.members.length - 1) && m('span', '|')
        ]),

        typeDetails.kind === Kind.TypeAlias && typeDetails.type
      ],
      hasArrow: true,
      position: 'top',
      trigger
    })
    : trigger;
}
