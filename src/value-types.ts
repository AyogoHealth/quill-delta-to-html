
type NewLine = "\n";
const NewLine = "\n" as NewLine;

type ListType = "ordered" | "bullet";
const ListType = {
    Ordered: 'ordered' as ListType,
    Bullet: 'bullet' as ListType
}

type ScriptType = "sub" | "super";
const ScriptType = {
    Sub: "sub" as ScriptType,
    Super: "super" as ScriptType
}

type DirectionType = "rtl";
const DirectionType = {
    Rtl: "rtl" as DirectionType
}

type AlignType = "center" | "right";
const AlignType = {
    Center: "center" as AlignType,
    Right: "right" as AlignType
}

type DataType = "text" | "image" | "video" | "formula" | "emojiDef" | "emojiPick" | "taskCallout";
const DataType = {
    Image: "image" as DataType,
    Video: "video" as DataType,
    Formula: "formula" as DataType,
    Text: "text" as DataType,
    Tooltip: 'emojiDef' as DataType,
    Emoji: 'emojiPick' as DataType,
    Task: 'taskCallout' as DataType
};

type GroupType = "block" | "inline-group" | "list" | "video" | "emojiDef" | "emojiPick" | "taskCallout";
const GroupType = {
    Block: 'block' as GroupType,
    InlineGroup: 'inline-group' as GroupType,
    List: 'list' as GroupType,
    Video: 'video' as GroupType,
    Tooltip: 'emojiDef' as GroupType,
    Emoji: 'emojiPick' as GroupType,
    Task: 'taskCallout' as GroupType
};

export { NewLine, ListType, ScriptType, DirectionType, AlignType, DataType, GroupType };
