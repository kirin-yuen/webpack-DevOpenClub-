import style from './scss/style.scss';
import moduleA from './scss/module-a.scss';
import moduleB from './scss/module-b.scss';

import $ from 'jquery';

// 生成一个hash值的选择器，来解决冲突
var $div1 = $('<div></div>').addClass(moduleA.box);
var $div2 = $('<div></div>').addClass(moduleB.box);

$div1.text('module-a');
$div2.text('module-b');

$('body').append($div1).append($div2);