interface WindowWithDataLayer extends Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare const window: WindowWithDataLayer;

export const useAnalytics = () => {
  const pageView = (title: string, path: string) => {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
    });
  };

  const event = (action: string, category: string, label: string, value?: number) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  return {
    pageView,
    event,
  };
};
