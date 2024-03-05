import { IUser } from '@/interfaces/IUser';
import mongoose, { Model, model, Schema } from 'mongoose';

const userSchema = new Schema({
  fullname: {
    type: String,
    require: true
  },
  cedula: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: {
      values: ["Frontend Dev", "Backend Dev", "Full Stack", "Diseñador", "Marketing", "Administrador"],
      message: '{VALUE} no es una opción válida'
    }
  },
  isAdmin: {
    type: Boolean,
  },
}, {
  timestamps: true
});

const User: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default User;