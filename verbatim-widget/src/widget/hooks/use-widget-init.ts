import { useEffect, usePropertyMenu, useSyncedState, useWidgetNodeId } from "../lib/index";
import { MESSAGE_TYPES } from "../shared/message-types";
import { EventProperty } from "../shared/types";
import { EventInfo } from "../shared/types";
import { createLabel } from "../usecases/create/create-label";

export type WidgetType = 'init' | 'create' | 'event'

const useWidgetInit = () => {
    const [widgetType] = useSyncedState<WidgetType>('widgetType', 'init');
    const [eventInfo, setEventInfo] = useSyncedState<EventInfo | undefined>('eventInfo', undefined);
    const [eventProperties, setEventProperties] = useSyncedState<EventProperty[] | undefined>('eventProperties', undefined);

    const widgetNodeId = useWidgetNodeId();

    useEffect(() => {
        figma.ui.onmessage = async (msg: { data: any, type: MESSAGE_TYPES }) => {
            switch (msg.type) {
                case MESSAGE_TYPES.CREATE_EVENT:
                    createLabel(msg.data, widgetNodeId);
                    setEventInfo(msg.data);
                    setEventProperties(msg.data.properties);
                    figma.notify('Event created');
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.UPDATE_EVENT:
                    figma.notify('Update Event');
                    break;
                case MESSAGE_TYPES.DELETE_EVENT:
                    figma.notify('Delete Event');
                    break;
                case MESSAGE_TYPES.LIST_EVENTS:
                    figma.notify('List Events');
                    break;
                case MESSAGE_TYPES.FOCUS_NODE:
                    const node = figma.getNodeById(msg.data.nodeId);
                    if (node) {
                        figma.currentPage.selection = [node as SceneNode];
                        figma.viewport.scrollAndZoomIntoView([node]);
                    }
                    figma.closePlugin();
                    break;
                case MESSAGE_TYPES.ROUTE_UPDATE:
                    break;
                default:
                    figma.notify('Unknown Message');
                    break;
            }
        };
    });

    return { widgetType, eventInfo, eventProperties, widgetNodeId };
};


export default useWidgetInit;
