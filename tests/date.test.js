import {date} from "../src/rules";
import {expect, test} from "@jest/globals";

test('passes with valid date string format', () => {
    expect(date('2020-01-10')).toBe(true);
});

test('passes with valid date string and custom format', () => {
    expect(date('01-03, 2020:DD-MM, YYYY')).toBe(true);
});

test('fails with valid date string but wrong format', () => {
    expect(date('01-10-2020:YYYY-MM-DD')).toBe(false);
});

test('fails with valid date format but wrong date values', () => {
    expect(date('2020/19/01:YYYY/MM/DD')).toBe(false);
});

test('fails with other types', () => {
    expect(date(null)).toBe(false);
    expect(date('')).toBe(false);
    expect(date(undefined)).toBe(false);
    expect(date([])).toBe(false);
    expect(date({})).toBe(false);
});