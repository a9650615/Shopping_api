export default class DB_Function {
  _model;

  async findOne(where = {}, option = {}) {
    return await this._model.findOne({ where });
  }

  async findAll(where = {}) {
    return await this._model.findAll({ where });
  }

  async insert(value = {}) {
    return await this._model.create(value);
  }

  async delete(where = {}, option = {}) {
    return await this._model.destroy({ where });
  }

  async update(where = {}, value = {}, option = {}) {
    return await this._model.update(value, { where });
  }
}