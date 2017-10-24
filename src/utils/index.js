import slug from 'slug';

export const mapAndSlug = (obj, attribute) => {
  var reduced = obj.reduce(function(accumulator, current) {
    var slugged = slug(current[attribute])
    current.slug = slugged
    accumulator[slugged] = current;
    return accumulator;
  }, {});
  return reduced
}

export const setImageKeys = (story) => {
  var thumbnail = story.multimedia.find(setThumbnail) 
  if (!thumbnail) {
    thumbnail = {url: "src/images/news.jpg"}
  }
  var hero = story.multimedia.find(setHero)
  if (!hero) {
    hero = {url: "src/images/news.jpg"}
  }
  return {...story, thumbnail: thumbnail.url, hero: hero.url}
  }

const setThumbnail = (image) => {
     return image['format'] == "thumbLarge"
  }

const setHero = (image) => {
    return image['format'] == "superJumbo"
  }
