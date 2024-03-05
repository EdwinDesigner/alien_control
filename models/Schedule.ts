
import { ISchedule } from '@/interfaces/ISchedule';
import mongoose, { Model, model, Schema } from 'mongoose';

const scheduleSchema = new Schema({
  day: {
    type: String,
    unique: true,
    enum: {
      values: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      message: '{VALUE} no es una opción válida'
    }
  },
  entry_1: {
    type: String,
    require: true,
  },
  entry_2: {
    type: String,
    require: true,
  },
  exit_1: {
    type: String,
    require: true,
  },
  exit_2: {
    type: String,
    require: true,
  },
}, {
  timestamps: true
});

const Schedule: Model<ISchedule> = mongoose.models.Schedule || model('Schedule', scheduleSchema);

export default Schedule;