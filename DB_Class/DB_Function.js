export default class DB_Function {
  _model;

  async select(where = {}) {
    return await this._model.findOne({ where });
  }

  async insert(value = {}) {
    return await this._model.create(value);
  }

  async delete(where = {}) {
    return await this._model.destroy({ where });
  }

  async update(where = {}, value = {}) {
    return await this._model.update(value, { where });
  }
}