import { classNames } from './classNames';

describe('classNames', () => {
	test('Без аргументов', () => {
		expect(classNames()).toBe('');
	});

	test('1 класс (строка)', () => {
		expect(classNames('test-class')).toBe('test-class');
	});

	test('2 класса (строка)', () => {
		expect(classNames('test-class', 'red')).toBe('test-class red');
	});

	test('2 класса (строка + объект-true)', () => {
		expect(classNames('test-class', { red: true })).toBe('test-class red');
	});

	test('2 класса (строка + объект-false)', () => {
		expect(classNames('test-class', { red: false })).toBe('test-class');
	});

	test('3 класса (строка + объект-true + строка)', () => {
		expect(classNames('test-class', { red: true }, 'filled')).toBe('test-class red filled');
	});

	test('3 класса (строка + объект-true + объект-true)', () => {
		expect(classNames('test-class', { red: true }, { filled: true })).toBe('test-class red filled');
	});

	test('3 класса (строка + пустой объект + объект-true)', () => {
		expect(classNames('test-class', {}, { filled: true })).toBe('test-class filled');
	});
	test('4 классов (строка + объект с несколькими параметрами + объект-true)', () => {
		expect(classNames('test-class', { red: true, yellow: false, centered: true }, 'hovered', { filled: true }))
			.toBe('test-class red centered hovered filled');
	});
});
