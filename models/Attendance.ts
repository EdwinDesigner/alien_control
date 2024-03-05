import { IAttendance } from '@/interfaces/IAttendance';
import mongoose, { Model, model, Schema } from 'mongoose';

const attendanceSchema = new Schema({
  cedulaUser: {
    type: String,
  },
  entry: {
    entry_1: {
      type: String
    },
    entry_2: {
      type: String
    }
  },
  exit: {
    exit_1: {
      type: String
    },
    exit_2: {
      type: String
    }
  },
  extra: [String],
  permissions: [
    {
      start: String,
      finish: String,
    }
  ],
  observations: [
    {
      time: String,
      message: String,
    }
  ],
  date: Date,
}, {
  timestamps: true
});

const Attendance: Model<IAttendance> = mongoose.models.Attendance || model('Attendance', attendanceSchema);

export default Attendance;