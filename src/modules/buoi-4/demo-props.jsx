import { Component } from "react";
import C from "./c";
import A from "./a";

/**
 * Trong React không có đường tắt để truyền từ component này xuống component kia nhanh nhất có thể nếu như bị lồng nhiều cấp với nhau.
 * Chúng ta chỉ có thể truyền từng cấp một.
 *
 * -> Redux. (Thư viện bên ngoài)
 * -> Sau này thì react có ra đừng ContextApi để có thể truyền không cần thông qua các component trung gian. (React)
 *! (Redux có performance tốt hơn thằng ContextApi của React vì thằng redux có cơ chế chống re-render lại nhiều lần tốt hơn thằng COntextApi)
 */

export default class DemoProps extends Component {
  render() {
    return (
      <>
        <A />
        <A />
        <A />
      </>
    );
  }
}

// Trước khi dùng redux:
// Component = UI + Logic.
// Sau khi dùng redux:
// 1. UI. (Component)
// 2. Logic. (Redux)
// redux giúp ta tách biệt phần UI và logic ra đễ dễ maintain sau này


