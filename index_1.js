/**
 * - Cache (useCallback, useMemo, ...)
 * - Observer pattern (useEffect)
 * - Redux
 * - Promise (call api)
 */

// ===== Cache =====
// function fib(n){
//     if (n <= 1) return 1;
//     return fib(n-1)+fib(n-2);
// }



function fib(n) {
    if (cache.has(n)) {
      return cache.get(n);
    }
  
    if (n <= 1) return 1;
  
    // 41: fib(40) + fib(39)
    let $1 = fib(n - 1);
    let $2 = fib(n - 2);
  
    return $1 + $2;
  }
  // -- Chưa sử dụng cache --
  // console.time("cache 1"); // start
  // console.log("cache 1: fib(40) = ", fib(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 1"); // end
  
  // console.time("cache 2"); // start
  // console.log("cache 2: fib(40) = ", fib(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 2"); // end
  
  // version 1
  // let cache = null;
  
  // const version_1 = (n) => {
  //   if (cache) return cache;
  
  //   const rs = fib(n);
  //   cache = rs;
  
  //   return cache;
  // };
  
  // console.time("cache 1"); // start
  // console.log("cache 1: fib(40) = ", version_1(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 1"); // end
  
  // // version_1(41); // sai kết quả
  // // version_1(42); // sai kết quả
  
  // console.time("cache 2"); // start
  // console.log("cache 2: fib(40) = ", version_1(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 2"); // end
  
  // version 2
  // Thư viện sách:
  // 40: 165580141
  // 41: 12121343242
  // 42: 23423423423423
  // 43: 23423423413123123123

//   const cache = {}

//   function ver2(n){
//     if(cache[n]) return cache[n]
//     cache[n]=fib(n)
//     return cache[n]
//   }

  
  // hash table: key value
  // Map: key value
  // Object vs Map
  // Map: cho những key value -> lớn, rất rất nhiều thì hiệu suất tốt hơn so với dùng object.Còn hiệu suất của object tốt hơn map khi dữ liệu nhỏ tầm <100
  
  // -- Gắn giá trị khởi tạo
//   const lsMap = new Map([[2,3],[4,5]])
  const cache = new Map();
  
  function ver2(n) {
    if (cache.has(n)) return cache.get(n);
    // thêm vào cache
  
    //! cache.set(n,fib(n))
    //! return cache.get(n);

    const rs = fib(n);     
    cache.set(n, rs);
  
    return rs;

    // Thay vì return về cache.get(n) sẽ mất 1 số thời gian thực thi vs hàm get thì ta tạo 1 biến primatity lưu giữ giá trị fib lun sẽ tối ưu hơn
  }
  
  // console.time("cache 1"); // start
  // console.log("cache 1: fib(40) = ", ver2(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 1"); // end
  
  // // version_1(41); // sai kết quả
  // // version_1(42); // sai kết quả
  
  // console.time("cache 2"); // start
  // console.log("cache 2: fib(40) = ", ver2(40)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 2"); // end
  
  // console.time("cache 3"); // start
  // console.log("cache 3: fib(41) = ", ver2(41)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 3"); // end
  
  // console.time("cache 4"); // start
  // console.log("cache 4: fib(41) = ", ver2(41)); // hàm tính toán cần xem thời gian chạy
  // console.timeEnd("cache 4"); // end
  
  // +++++ Cache +++++
  
  // ===== Observer =====
  // Design Pattern
  
  /**
   * useEffect(()=>{
   *  console.log(1);
   * },[count])
   *
   * useCallback(()=>{},[count])
   */
  
  // Thông báo ra video mới cho những người đã đăng ký kênh youtube của mình.
  // Lưu trữ những người dùng đã đăng ký kênh
  const subscriber = [];
  // Thêm người dùng vào trong danh mục theo dõi kênh
  function subscribe(fn) {
    subscriber.push(fn);
  }
  // Xóa người dùng khỏi mục theo dõi kênh
  function unsubscribe() {}
  // Phát thông báo cho những người đã theo dõi kênh
  function notify() {
    subscriber.forEach((fn) => {
      fn();
    });
  }
  
  subscribe(() => {
    console.log(1);
  });
  subscribe(() => {
    console.log(2);
  });
  subscribe(() => {
    console.log(3);
  });
  
  notify();
  // +++++ Observer Pattern +++++
  