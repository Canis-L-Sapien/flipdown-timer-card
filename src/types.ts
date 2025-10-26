import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'flipdown-timer-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface FlipdownTimerCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity: string;
  show_title?: boolean;
  show_header?: boolean;
  show_hour?: boolean | string;
  show_day?: boolean | string;
  duration?: string;
  theme?: string;
  localize?: {
    button?: string;
    header?: string;
  };
  localizeBtn?: string[];
  localizeHeader?: string[];
  styles?: {
    rotor?: {
      width?: string;
      height?: string;
      space?: string;
      fontsize?: string;
    };
    button?: {
      location?: string;
      width?: string;
      height?: string;
      fontsize?: string;
    };
  };
  tap_action?: any;
  hold_action?: any;
  double_tap_action?: any;
}
