import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ItemForm = ({item, allTopics, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Item</h1>
      <TextInput
        name="title"
        label="Title"
        value={item.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Topic"
        value={item.authorId}
        defaultOption="Select Topic"
        options={allTopics}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={item.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={item.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ItemForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  allTopics: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ItemForm;
