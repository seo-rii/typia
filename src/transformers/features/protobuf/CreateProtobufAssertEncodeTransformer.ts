import { ProtobufAssertEncodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufAssertEncodeTransformer {
    export const transform = GenericTransformer.factory("createAssertEncode")(
        (project) => (modulo) =>
            ProtobufAssertEncodeProgrammer.write(project)(modulo),
    );
}
