use serde_json::Value;

pub fn convert(json: &Value) -> String {
    match json {
        Value::Object(map) => {
            let mut ts_def = String::from("{\n");
            for (key, value) in map {
                let ts_type = json_to_ts_type(value);
                ts_def.push_str(&format!("  {}: {},\n", key, ts_type));
            }
            ts_def.push_str("}");
            ts_def
        }
        _ => String::from("any"),
    }
}

fn json_to_ts_type(value: &Value) -> String {
    match value {
        Value::Null => "null".to_string(),
        Value::Bool(_) => "boolean".to_string(),
        Value::Number(_) => "number".to_string(),
        Value::String(_) => "string".to_string(),
        Value::Array(item) => {
            if item.is_empty() {
                "any[]".to_string()
            } else {
                let ts_type: String = json_to_ts_type(&item[0]);
                format!("{}[]", ts_type)
            }
        }
        Value::Object(_) => convert(value),
    }
}
