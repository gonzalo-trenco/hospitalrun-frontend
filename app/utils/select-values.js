import { isArray } from '@ember/array';
import EmberObject from '@ember/object';
function selectValuesMap(value) {
  return {
    id: value,
    value
  };
}

export default {
  /**
   * Map an objects into a format so that selects can use object as value for select
   * @param {object} object the object to map
   * @returns {object} the mapped object
   */
  selectObjectMap(selectValue) {
    return EmberObject.create({
      selectObject: selectValue
    });
  },

  selectValuesMap,

  /** Map an array of strings to objects with id and value set to the string values
   * so that the array can be used for em-select
   * @param {Array} array to map.
   * @param {boolean} includeEmpty if there should be an empty item added to the select list
   */
  selectValues(array, includeEmpty) {
    if (isArray(array)) {
      let arrayToMap = new Array(array);
      if (includeEmpty) {
        arrayToMap = [''];
        arrayToMap.addObjects(array);
      } else {
        arrayToMap = array;
      }
      return arrayToMap.map(selectValuesMap);
    }
  }
};
