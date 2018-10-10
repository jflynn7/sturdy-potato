/**
 * Define FormDefinition as a class, rather than an
 * interface so we can use getters and setters for
 * child elements.
 */
import { SidePanel } from '../components/side-panel/state/side-panel.reducers';
import { PanelContent } from './panels';

export class FormDefinition {
  id?: string;
  title?: string;
  details?: string;
  elements?: FormElement[];

  get = (inputId: string) => {
    return this.elements.find((element: FormElement) => {
      return element.inputId === inputId;
    });
  }

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.details = data.details;
    this.elements = data.elements;
  }
}


export class Forms {

  static TestForm: FormDefinition = new FormDefinition({
    id: 'test-form',
    title: 'Test Form',
    details: 'Just a little test form for testing a for form definition',
    elements: [
      <FormElement> {
        inputId: 'test-one',
        type: 'text'
      },
      <FormElement> {
        inputId: 'test-two',
        type: 'select',
        optionPanel: PanelContent.Test
      },
      <FormElement> {
        inputId: 'test-three',
        type: 'radio',
        options: [
          <FormElementOption> {
            id: 'test-three-option-1',
            label: 'Test Option Label 1',
            value: 1
          },
          <FormElementOption> {
            id: 'test-three-option-2',
            label: 'Test Option Label 2',
            value: 2
          },
          <FormElementOption> {
            id: 'test-three-option-3',
            label: 'Test Option Label 3',
            value: 1
          }
        ]
      }
    ]
  });
}

export interface FormElement {
  inputId?: string;
  type?: string;
  label?: string;
  options?: FormElementOption[];
  optionPanel?: SidePanel;
}

export interface FormElementOption {
  id?: string;
  label?: string;
  value?: any;
  isTitle?: boolean;
  selectable?: boolean;
}

export interface FormUpdateData {
  formId?: string;
  inputId?: string;
  value?: string;
}
