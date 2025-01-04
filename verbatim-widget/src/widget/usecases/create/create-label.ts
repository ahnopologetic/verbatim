import { UserEvent } from "../../shared/types";

export const createLabel = (userEvent: UserEvent, widgetNodeId: string) => {
    // clone a widget with type
    const widgetNode = figma.getNodeById(widgetNodeId) as WidgetNode;

    if (!widgetNode) {
        figma.notify('Widget not found');
        return;
    }

    const newWidgetNode = widgetNode.cloneWidget({
        widgetType: 'event'
    });

    newWidgetNode.name = `Verbatim Event: ${userEvent.name}`;
    newWidgetNode.x = widgetNode.x + widgetNode.width + 40;

    return newWidgetNode
};