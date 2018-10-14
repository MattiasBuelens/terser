drop_fnames: {
  mangle = {
    keep_fnames : false,
  };
  input: {
    function foo() {
      function bar() {
        return "foobar";
      }
    }
  }
  expect: {
    function foo() {
      function o() {
        return "foobar";
      }
    }
  }
}

keep_fnames: {
  mangle = {
    keep_fnames: true,
  };
  input: {
    function foo() {
      function bar() {
        return "foobar";
      }
    }
  }
  expect: {
    function foo() {
      function bar() {
        return "foobar";
      }
    }
  }
}

drop_classnames: {
  mangle = {
    keep_classnames : false,
  };
  input: {
    function foo() {
      class Bar {}
    }
  }
  expect: {
    function foo() {
      class o {}
    }
  }
}

keep_classnames: {
  mangle = {
    keep_classnames: true,
  };
  input: {
    function foo() {
      class Bar {}
    }
  }
  expect: {
    function foo() {
      class Bar {}
    }
  }
}

keep_some_fnames: {
  mangle = {
    keep_fnames: /^[A-Za-z]*Element$/,
  };
  input: {
    function foo() {
      function bar() {}
      function barElement() {}
    }
  }
  expect: {
    function foo() {
      function n() {}
      function barElement() {}
    }
  }
}

keep_some_classnames: {
  mangle = {
    keep_classnames: /^[A-Za-z]*Element$/,
  };
  input: {
    function foo() {
      class Bar {}
      class BarElement {}
    }
  }
  expect: {
    function foo() {
      class s {}
      class BarElement {}
    }
  }
}

