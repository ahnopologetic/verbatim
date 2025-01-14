import { useSetPropertyMenu } from "./hooks/use-set-property-menus";
import useWidgetInit from "./hooks/use-widget-init";
import { Layout } from "./lib/ui/components/layout";
import { EventWidget } from "./pages/event-widget";
import { WidgetInit } from "./pages/init-widget";

function MainWidget() {
  const { widgetType, widgetNodeId, mainWidgetId } = useWidgetInit();
  useSetPropertyMenu(widgetType, mainWidgetId, widgetNodeId);

  return (
    <Layout>
      {widgetType === 'init' && <WidgetInit />}
      {widgetType === 'event' && <EventWidget widgetNodeId={widgetNodeId} />}
    </Layout>
  );
}
figma.widget.register(MainWidget);