mod json2ts;

#[tauri::command]
pub fn convert_json2ts(json_string: String) -> String {
    println!("convert_json2ts from JavaScript!{}", json_string);

    // 我们可以将其转换为 Rust 的数据结构
    let json: serde_json::Value = serde_json::from_str(&json_string).unwrap();

    // 然后我们可以将其转换为 TypeScript 类型定义
    let ts_definition = json2ts::convert(&json);

    // 最后我们返回 TypeScript 类型定义
    ts_definition
}
