/**
 * Copyright© 2017, Oracle and/or its affiliates. All rights reserved.
 */

import {IMessagePayload} from "./message-payload.interface";
import {IActionPayload} from "../action-payload/action-payload.interface";

/**
 * The postback message payload
 */
interface IPostbackMessagePayload extends IMessagePayload{
    /**
     * The text of the message payload.
     */
    text?: string,
    /**
     * The postback.
     * This can be either a String or a JSON object
     */
    postback: any,
    /**
     * A list of actions related to the text.
     */
    actions?: IActionPayload[],
    /**
     * A list of global actions to be rendered.
     * How they are rendered is channel-specific.
     * For example, in Facebook they will be rendered as reply_options.
     */
    globalActions?: IActionPayload[]
}

export {IPostbackMessagePayload};