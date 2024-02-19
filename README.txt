1. public.
- folder chứa tất cả những static file (file tĩnh): image, audio, font, ...
2. src.
- Nơi code chính của chúng ta
3. .gitignore
- liệt kê những file hay folder chúng ta không muốn đẩy vào git.
4. package.json
- Chứa thông tin của dự án. ( tên dự án, thư viện sử dụng trong dự án)
5. vite.config.js
- File để setup chạy dự án react
6. .eslintrc.cjs
- Liệt kê những quy tắc của dự án. ( chỉ được sử dụng các từ khóa khai báo es6 ( let,const), đặt tên biến thì phải sử dụng camelCase)
7. Gõ: npm i
- để cài những thư viện được liệt kê trong dự án.
8. node_modules
- nơi chứa tất cả thư viện của dự án.

9.
#Chú thích:
- Sau khi clone repo về thì gõ npm i đê cài các thư viện trong dự án của chúng ta.
- start dự án: `npm run dev`

10. State vs Props
- State: + Trạng thái của 1 component
         + Giá trị có thể xét lại, mỗi lần xét lại sẽ re-render(xét ở vị trí trong 1 component)

- Props: +Giá trị truyền từ component cha vào component con. Giao tiếp giữa hai component với nhau(Cha-con)
         + Giá trị không thể xét lại vì được truyền từ bên ngoài vào(xét ở vị trí ở trong component)
=>Khi nào sử dụng state, prop?
- Sử dụng state khi có sự tương tác của người dùng làm thay đổi giao diện
- Sử dụng props khi chúng ta muốn truyền dữ liệu từ component cha -> con.

11. Khi cập nhật lại state giống với giá trị trước đó thì component sẽ không re-render. 

12. Redux
- cách tạo state.
- cách cập nhật state.

13. Life Cycle: Vòng đời component
- Mounting (Sinh Ra): Khi component được đưa lên trên giao diện (Xuất hiện trên cây DOM - Document Object Model).
- Updating (Trưởng Thành):  + Khi component cập nhật lại giao diện (UI) (re-render).
                            + Khi nào component sẽ re-render ??? 
                                1. State thay đổi (khi setState)
                                2. Component Cha Re-render thì component con sẽ re-render. (Props thay đổi)
- Un-Mounting (Chết Đi): Khi component bị xóa khỏi DOM.

14. Method Life Cycle. (Can Thiệp vào vòng đời của component)
15. Hooks Life Cycle. (Can Thiệp vào vòng đời của component)  

16. setState
- class: Tự động merge các state lại giúp chúng ta.
- function: Khi set lại state thì thì sẽ ghi đè lên state(không merge)