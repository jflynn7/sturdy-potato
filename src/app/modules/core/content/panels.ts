import { SidePanel } from '../components/side-panel/state/side-panel.reducers';
import { SelectItemListComponent } from '../components/side-panel/components/select-item-list/select-item-list.component';
import { FormElementOption } from './forms';

export class PanelContent {

  static Test: SidePanel = <SidePanel> {
    title: 'Test Select Options',
    id: 'test-select-panel',
    component: SelectItemListComponent,
    inputId: 'selectOptionOne',
    data: [
      <FormElementOption> {
        label: 'Select Option Title',
        value: undefined,
        isTitle: true,
        selectable: false
      },
      <FormElementOption> {
        label: 'Select Option 1',
        value: 1,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 2',
        value: 2,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 3',
        value: 3,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 4',
        value: 4,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Another Select Option Title',
        value: undefined,
        isTitle: true,
        selectable: false
      },
      <FormElementOption> {
        label: 'Select Option 5',
        value: 1,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 6',
        value: 2,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 7',
        value: 3,
        isTitle: false,
        selectable: true
      },
      <FormElementOption> {
        label: 'Select Option 8',
        value: 4,
        isTitle: false,
        selectable: true
      },
    ]
  };

}
