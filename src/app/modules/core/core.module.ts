import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ButtonMenuComponent } from './components/side-panel/components/button-menu/button-menu.component';
import { SelectItemListComponent } from './components/side-panel/components/select-item-list/select-item-list.component';
import { PanelComponentDirective } from './components/side-panel/directives/panel-component.directive';
import { IconicButtonComponent } from './components/presentation/buttons/iconic-button/iconic-button.component';
import { ToggleGroupComponent } from './components/presentation/buttons/toggle-group/toggle-group.component';
import { HorizontalButtonMenuComponent } from './components/presentation/buttons/horizontal-button-menu/horizontal-button-menu.component';
import { CardComponent } from './components/presentation/wrappers/card/card.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { TabbedDataTableComponent } from './components/tables/tabbed-data-table/tabbed-data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './services/rest.service';
import { EffectsModule } from '@ngrx/effects';
import { CoreDataEffects } from './state/core-data/core-data.effects';
import { FormComponent } from './components/forms/form/form.component';
import { SideMenuSelectComponent } from './components/forms/elements/side-menu-select/side-menu-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElementBaseComponent } from './components/forms/elements/element-base/element-base.component';
import { TextInputComponent } from './components/forms/elements/text-input/text-input.component';
import { RadioInputComponent } from './components/forms/elements/radio-input/radio-input.component';
import { CheckboxComponent } from './components/forms/elements/checkbox/checkbox.component';
import { AutocompleteComponent } from './components/forms/elements/autocomplete/autocomplete.component';
import { PageBaseComponent } from './pages/page-base/page-base.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { UserDashboardPageComponent } from './pages/user-dashboard-page/user-dashboard-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { FormService } from './services/form.service';
import { TableauVisualisationComponent } from './components/tableau-visualisation/tableau-visualisation.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([CoreDataEffects])
  ],
  declarations: [
    DashboardComponent,
    ErrorPageComponent,
    PageNotFoundPageComponent,
    UserDashboardPageComponent,
    SettingsPageComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    SidePanelComponent,
    ButtonMenuComponent,
    SelectItemListComponent,
    PanelComponentDirective,
    IconicButtonComponent,
    ToggleGroupComponent,
    HorizontalButtonMenuComponent,
    CardComponent,
    DataTableComponent,
    TabbedDataTableComponent,
    FormComponent,
    SideMenuSelectComponent,
    ElementBaseComponent,
    TextInputComponent,
    RadioInputComponent,
    CheckboxComponent,
    AutocompleteComponent,
    PageBaseComponent,
    TableauVisualisationComponent,
    NotificationComponent
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    SidePanelComponent,
    ButtonMenuComponent,
    SelectItemListComponent,
    PanelComponentDirective,
    IconicButtonComponent,
    ToggleGroupComponent,
    HorizontalButtonMenuComponent,
    CardComponent,
    DataTableComponent,
    TabbedDataTableComponent,
    FormComponent,
    SideMenuSelectComponent,
    ElementBaseComponent,
    TextInputComponent,
    RadioInputComponent,
    CheckboxComponent,
    AutocompleteComponent,
    PageBaseComponent,
    TableauVisualisationComponent,
    NotificationComponent
  ],
  // Entry components added for dynamic side panel
  entryComponents: [
    ButtonMenuComponent,
    SelectItemListComponent
  ],
  providers: [
    RestService,
    FormService
  ]
})
export class CoreModule { }
