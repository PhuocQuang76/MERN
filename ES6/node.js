// Node JS - 
// runtime for JS
// to run js outside the browser/server
// google chrome V8 engine
// non-blocking, single threaded
// scalable network applications
// servers, APIs, file system interactions and all other thing that we can think of by development framework

// Non Blocking - Approach

// Java Certification

// David N => Mexican => 30 min
// Eric M => Italian => 20 min
// Suyash => South Asian => 10 min

// Waiters => Attendent

// Approach 1 ==> Blocking Approach

// David N <==> (order1) <==> Kitchen (waits) ==> 30 mins ==> Delivers
// Eric M <==> (order2) <==> Kitchen (waits) ==> 20 mins ==>  Delivers
// Suyash <==> (order3) <==> Kitchen (waits) ==> 10 mins ==>  Delivers

// Total Time ==> 30 + 20 + 10 => 60 mins (to finish the order)

// Approach 2 ==> Non-Blocking executions (using event loop for registered API's, callbacks)

// David N <==> (order1) <==> Kitchen (order-key1) <==> (keeps checking order-key) ==> 30 mins ==> Delivers
// Eric M <==> (order2) <==> Kitchen (order-key2) <==> (keeps checking order-key) ==> 20 mins ==> Delivers
// Suyash <==> (order3) <==> Kitchen (order-key3) <==> (keeps checking order-key) ==> 10 mins ==> Delivers


// Total Time ==> Max(30, 20, 10) => 30 mins (to finish the order)
// 50% - reductions