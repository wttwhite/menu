# scss 用法总结  --- 记录有用但平时不知道的
## 基础使用
### 变量
```scss
$color: #fff;
$color: #fff !global; // 全局变量, 不建议使用
.test {
  color: $color;
}
```
### 插值语句
通过#{}来插入变量
```scss
$name: title;
div.#{$name} {
  color: #fff;
}
```
### 父类选择器
```scss 
.test {
  color: #fff;
  &:hover {
    color: #000;
  }
}
.test{
    $selector: &;
    #{$selector}-title {
        color: #fff;
    }
}
@mixin test {
    @if & {
        &:hover {
            color: #fff;
        }
    }@else {
        color: #000;
    }
}
@include test;
a {
    @include test;
}
```
### ~同级选择器 >子选择器 +相邻选择器
```scss
.test {
  color: #fff;
  ~ .test {
    color: #000;
  }
  > .test {
    color: #000;
  }
  div > {  // test div 下的子容器
    color: #000;
  }
  + .test {
    color: #000;
  }
}
```
### 多属性叠写
```scss
.test {
  border: {
    width: 1px;
    style: solid;
    color: #000;
  }
}
```
### 注释
//  -> 编译后不在代码中

/* */ -> css注释方式，编译后在代码中

/*！ */ -> scss注释方式，编译后在代码中，压缩工具不会压缩，保留版权声明注释

### @import
```scss
@import "test"; // 导入test.scss, 文件中的样式和变量都可以使用
```
## 代码复用
### 继承
重用类名
```scss
<div class="box top-box"></div>
// 以上写法会增加无语意样式, 可以使用继承
.box {
  width: 100px;
  height: 100px;
  background: #000;
}
.top-box {
  @extend .box;
  top: 0;
}
```
### 混合
定义重复样式，相当于函数提出公共部分
```scss
@mixin border-radius($radius: 5px) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  -o-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(10px);
}
```
### 循环语句
```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

@while $i < 6 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i + 1;
}
```
## 函数
### 内置函数
```scss
// 数学函数
ceil(3.14) // 4
floor(3.14) // 3
percentage(0.5) // 50%
round(3.14) // 3
abs(-10) // 10
min(1px, 2px) // 1px
max(1px, 2px) // 2px
random() // 0.123456789
// 字符串函数
unquote("foo") // foo
quote(foo) // "foo"
str-length("foo") // 3
str-insert("f", o, 2) // foo
str-index("foo", o) // 2
str-slice("foo", 2) // o
to-upper-case("foo") // FOO
to-lower-case("foo") // foo
// 列表函数
nth($list, 2) // 2
join($list1, $list2, $separator: auto) // 1 2 3 4
append($list, $val, $separator: auto) // 1 2 3 4 5
zip($list1, $list2) // ((1, a), (2, b), (3, c))
index($list, $value) // 2
// 颜色函数
red(#f00) // 255
green(#0f0) // 255
blue(#00f) // 255
mix(#f00, #00f) // #7f007f
```
### 自定义函数
```scss
@function double($n) {
  @return $n * 2;
}
.test {
  width: double(5px);
}
```
## 条件语句
```scss
@if $type == ocean {
  // ...
} @else if $type == matador {
  // ...
} @else {
  // ...
}
```



