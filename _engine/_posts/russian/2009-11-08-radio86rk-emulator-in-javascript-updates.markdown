---
layout: post
title: "Вести с полей эмулятора Радио-86РК на JavaScript"
language: russian
date: 2009-11-08 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2009/11/86-javascript.html
categories:
- radio86
- russian
---
Когда есть немного времени, неспешно, с удовольствием, смакуя и присвистывая, развиваю [эмулятор на JavaScript'е винтажного компьютера Радио-86РК][Эмулятор Радио-86РК на JavaScript].

Все как в старые добрые времена, только прямо в браузере (нажмите на картину ниже).

<a href="http://radio86.googlecode.com/hg/online/radio86.html"><img src="/images/blog/rk.gif"/></a>

Текущая версия 0.6. Уже помимо самой эмуляции и набора игр есть встроенный ассемблер, на котором можно прямо в окне эмулятора писать и компилировать код для Intel 8080, и почти интерактивный дизассемблер, которым можно просматривать не только код, но и данные.

Несколько картинок.

Собственно, эмулятор (игра Volcano):

{% img /images/blog/radio86-volcano.png %}

Ассемблер:

{% img /images/blog/radio86-builtin-assembler.png %}

Дизассемблер:

{% img /images/blog/radio86-disassembler-chess.png %}

Также постепенно дополнется список игр.

В плане браузеров я делаю в основном только под Хром, но говорят, что в Firefox и Safari тоже работает с разной степенью мини-глюков.

Удовольствие от этого проекта очень сложно объяснить. Тут что-то глубинное.

[Эмулятор Радио-86РК на JavaScript]: /blog/russian/2009/09/25/radio86rk-emulator-in-javascript/
