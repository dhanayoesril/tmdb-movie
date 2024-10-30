import {
  convertCategoryParams,
  convertCategoryTitle,
  formatDate,
  toHoursAndMinutes,
} from './helpers';

describe('test helper formatDate', () => {
  it('should format date correctly', () => {
    const date = '2024-10-01';
    const result = formatDate(date);
    expect(result).toEqual('1 Oct 2024');
  });

  it('should return - if formatDate called with no params', () => {
    const date = null;
    const result = formatDate(date);
    expect(result).toEqual('-');
  });
});

describe('test helper toHoursAndMinutes', () => {
  const totalMinutes = 130;
  const result = toHoursAndMinutes(totalMinutes);
  expect(result).toEqual({
    hours: 2,
    minutes: 10,
  });
});

describe('test helper convertCategoryParams', () => {
  it('should return popular if category = popular', () => {
    const category = 'popular';
    const result = convertCategoryParams(category);
    expect(result).toEqual('popular');
  });

  it('should return now_playing if category = now-playing', () => {
    const category = 'now-playing';
    const result = convertCategoryParams(category);
    expect(result).toEqual('now_playing');
  });

  it('should return upcoming if category = upcoming', () => {
    const category = 'upcoming';
    const result = convertCategoryParams(category);
    expect(result).toEqual('upcoming');
  });

  it('should return top_rated if category = top-rated', () => {
    const category = 'top-rated';
    const result = convertCategoryParams(category);
    expect(result).toEqual('top_rated');
  });

  it('should return testing if category = testing (not defined condition)', () => {
    const category = 'testing';
    const result = convertCategoryParams(category);
    expect(result).toEqual('testing');
  });
});

describe('test helper convertCategoryTitle', () => {
  it('should return Popular if category = popular', () => {
    const category = 'popular';
    const result = convertCategoryTitle(category);
    expect(result).toEqual('Popular');
  });

  it('should return Now Playing if category = now-playing', () => {
    const category = 'now-playing';
    const result = convertCategoryTitle(category);
    expect(result).toEqual('Now Playing');
  });

  it('should return Upcoming if category = upcoming', () => {
    const category = 'upcoming';
    const result = convertCategoryTitle(category);
    expect(result).toEqual('Upcoming');
  });

  it('should return Top Rated if category = top-rated', () => {
    const category = 'top-rated';
    const result = convertCategoryTitle(category);
    expect(result).toEqual('Top Rated');
  });

  it('should return testing if category = testing (not defined condition)', () => {
    const category = 'testing';
    const result = convertCategoryTitle(category);
    expect(result).toEqual('testing');
  });
});
