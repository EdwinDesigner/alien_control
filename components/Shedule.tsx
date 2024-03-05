"use client";

import useSWR from "swr";
import { Button } from "@nextui-org/button";
import {
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  Spinner,
  TableRow,
  TableCell,
  Tooltip,
  useDisclosure,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import AllUsers from "./AllUsers";
import {
  TimeIcon,
  SheduleIcon,
  EditIcon,
  DeleteIcon,
  NewDayIcon,
} from "./icons";
import { useEffect, useRef, useState } from "react";
import { IDay, ISchedule } from "@/interfaces/ISchedule";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatDate } from "@/utils/formatDate";
import axios from "axios";
import { deleteSchedule } from "@/services/schedule";

const dayList: IDay[] = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Shedule = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [isLoadingModalShedule, setIsLoadingModalShedule] = useState(false);
  const [openModalConfirm, setIOpenModalConfirm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [scheduleConfirm, setScheduleConfirm] = useState<ISchedule | null>(null);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    success: false,
    message: "",
  });

  const btnSubmitRef = useRef<HTMLButtonElement>(null);

  const {
    data,
    error: errorSchedule,
    isLoading,
  } = useSWR("/api/schedule", fetcher, { refreshInterval: 1000 });

  useEffect(() => {
    if(!isOpen) {
      setScheduleConfirm(null);
      setIsEdit(false);
    }
  }, [isOpen])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchedule>();

  const onSubmit: SubmitHandler<ISchedule> = async (data) => {
    setIsLoadingModalShedule(true);

    if(isEdit) {
      const editShedule: ISchedule = {
        _id: scheduleConfirm?._id,
        day: dayList[Number(scheduleConfirm?.day)],
        entry_1: data.entry_1,
        entry_2: data.entry_2,
        exit_1: data.exit_1,
        exit_2: data.exit_2,
      };

      try {
        const res = await axios.post("/api/schedule/edit", editShedule);
  
        setIsLoadingModalShedule(false);
        setSuccess({
          success: true,
          message: res.data.message,
        });
  
        setTimeout(() => {
          setSuccess({ success: false, message: "" });
          onClose();
          setScheduleConfirm(null);
        }, 1500);
      } catch (error: any) {
        console.log(error);
        setIsLoadingModalShedule(false);
        setError({
          error: true,
          message: error.response.data.message,
        });
  
        setTimeout(() => setError({ error: false, message: "" }), 1500);
      }

      return;
    }
    const newShedule: ISchedule = {
      day: dayList[Number(data.day)],
      entry_1: data.entry_1,
      entry_2: data.entry_2,
      exit_1: data.exit_1,
      exit_2: data.exit_2,
    };

    try {
      const res = await axios.post("/api/schedule/create", newShedule);

      setIsLoadingModalShedule(false);
      setSuccess({
        success: true,
        message: res.data.message,
      });

      setTimeout(() => {
        setSuccess({ success: false, message: "" });
        setScheduleConfirm(null);
        onClose();
      }, 1500);
    } catch (error: any) {
      console.log(error);
      setIsLoadingModalShedule(false);
      setError({
        error: true,
        message: error.response.data.message,
      });

      setTimeout(() => setError({ error: false, message: "" }), 1500);
    }
  };

  const createShelude = () => {
    btnSubmitRef.current?.click();
  };

  const confirmModal = () => {
    setIOpenModalConfirm(true);
  };

  const delSchedule = async () => {
    try {
      const delSchedule = await deleteSchedule(scheduleConfirm?._id!);
      setSuccess({
        success: true,
        message: delSchedule.data.message
      });
      setTimeout(() => {
        setSuccess({ success: false, message: "" });
        setScheduleConfirm(null);
        setIOpenModalConfirm(false);
      }, 1500);
    } catch (error: any) {
      console.log(error);
      setError({
        error: true,
        message: error.response.data.message,
      });
      setTimeout(() => setError({ error: false, message: "" }), 1500);
    }
  }

  return (
    <>
      <Modal isOpen={openModalConfirm}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Eliminar horario del {scheduleConfirm?.day}</ModalHeader>
          <ModalBody>
            <p className="text-default-500">¿Seguro que deseas eliminar el horario del día <span className="font-medium capitalize">{scheduleConfirm?.day}</span>?</p>
            <div className="flex justify-center">
              {error.error && (
                <p className="text-sm text-danger-500 text-center">
                  {error.message}
                </p>
              )}
              {success.success && (
                <p className="text-sm text-green-500 text-center">
                  {success.message}
                </p>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              size="lg"
              variant="light"
              onClick={() => {
                setIOpenModalConfirm(false)
                setScheduleConfirm(null)
              }}
            >
              Cancelar
            </Button>
            <Button color="primary" size="lg" onClick={() => delSchedule()}>
              Eliminar horario
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar nuevo día
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full space-y-4"
                >
                  <div>
                    <label
                      htmlFor="day"
                      className="mb-4 text-base text-default-500"
                    >
                      Día
                    </label>
                    <Select
                      aria-label="día"
                      id="day"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      placeholder="Elije un día"
                      fullWidth
                      defaultSelectedKeys={isEdit ? scheduleConfirm?.day : ""}
                      {...register("day", {
                        required: "El día es requerido",
                      })}
                      isInvalid={errors.day ? true : false}
                      errorMessage={errors.day?.message}
                    >
                      {dayList.map((day, index) => (
                        <SelectItem key={index} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div>
                      <label
                        htmlFor="entry_1"
                        className="mb-4 text-base text-default-500"
                      >
                        Hora de entrada en la mañana
                      </label>
                      <Input
                        aria-label="Hora de entrada en la mañana"
                        id="entry_1"
                        type="time"
                        size="lg"
                        color="primary"
                        variant="bordered"
                        placeholder="Elije una hora"
                        fullWidth
                        defaultValue={isEdit ? scheduleConfirm?.entry_1 : ""}
                        {...register("entry_1", {
                          required:
                            "La hora de entrada en la mañana es requerida",
                        })}
                        isInvalid={errors.entry_1 ? true : false}
                        errorMessage={errors.entry_1?.message}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="exit_1"
                        className="mb-4 text-base text-default-500"
                      >
                        Hora de salida en la mañana
                      </label>
                      <Input
                        aria-label="Hora de salida en la mañana"
                        id="exit_1"
                        type="time"
                        size="lg"
                        color="primary"
                        variant="bordered"
                        placeholder="Elije una hora"
                        fullWidth
                        defaultValue={isEdit ? scheduleConfirm?.exit_1 : ""}
                        {...register("exit_1", {
                          required:
                            "La hora de salida en la mañana es requerida",
                        })}
                        isInvalid={errors.exit_1 ? true : false}
                        errorMessage={errors.exit_1?.message}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div>
                      <label
                        htmlFor="entry_2"
                        className="mb-4 text-base text-default-500"
                      >
                        Hora de entrada en la tarde
                      </label>
                      <Input
                        aria-label="Hora de entrada en la tarde"
                        id="entry_2"
                        type="time"
                        size="lg"
                        color="primary"
                        variant="bordered"
                        placeholder="Elije una hora"
                        fullWidth
                        defaultValue={isEdit ? scheduleConfirm?.entry_2 : ""}
                        {...register("entry_2", {
                          required:
                            "La hora de entrada en la tarde es requerida",
                        })}
                        isInvalid={errors.entry_2 ? true : false}
                        errorMessage={errors.entry_2?.message}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="exit_2"
                        className="mb-4 text-base text-default-500"
                      >
                        Hora de salida en la tarde
                      </label>
                      <Input
                        aria-label="Hora de salida en la tarde"
                        id="exit_2"
                        type="time"
                        size="lg"
                        color="primary"
                        variant="bordered"
                        placeholder="Elije una hora"
                        fullWidth
                        defaultValue={isEdit ? scheduleConfirm?.exit_2 : ""}
                        {...register("exit_2", {
                          required:
                            "La hora de desalida en la tarde es requerida",
                        })}
                        isInvalid={errors.exit_2 ? true : false}
                        errorMessage={errors.exit_2?.message}
                      />
                    </div>
                  </div>
                  <button type="submit" ref={btnSubmitRef}></button>
                </form>
                {error.error && (
                  <p className="text-sm text-danger-500 text-center">
                    {error.message}
                  </p>
                )}
                {success.success && (
                  <p className="text-sm text-green-500 text-center">
                    {success.message}
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  size="lg"
                >
                  Cerrar
                </Button>
                {isLoadingModalShedule ? (
                  <Button
                    size="lg"
                    isDisabled
                    startContent={<Spinner color="success" />}
                  >
                    Agregando...
                  </Button>
                ) : (
                  <Button color="primary" onClick={createShelude} size="lg">
                    { isEdit ? "Editar" : "Agregar"}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="bg-default-50 rounded-2xl p-4">
        <Tabs
          fullWidth
          aria-label="Opciones"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider flex justify-center",
            cursor: "w-full bg-emerald-500",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-emerald-500",
          }}
        >
          <Tab
            key="allusers"
            title={
              <div className="flex items-center space-x-2">
                <TimeIcon />
                <span>Todas las asistencias</span>
              </div>
            }
          >
            <div className="bg-default-50 rounded-2xl p-4">
              <AllUsers />
            </div>
          </Tab>
          <Tab
            key="createuser"
            title={
              <div className="flex items-center space-x-2">
                <SheduleIcon />
                <span>Horario</span>
              </div>
            }
          >
            <div className="bg-default-50 rounded-2xl py-4">
              <Table
                aria-label="Horarios"
                selectionMode="single"
                classNames={{
                  table: `${isLoading ? "min-h-[160px]" : "h-auto"}`,
                }}
              >
                <TableHeader>
                  <TableColumn key="day">DÍA</TableColumn>
                  <TableColumn key="entry_1">ENTRADA MAÑANA</TableColumn>
                  <TableColumn key="exit_1">SALIDA MAÑANA</TableColumn>
                  <TableColumn key="entry_2">ENTRADA TARDE</TableColumn>
                  <TableColumn key="exit_2">SALIDA TARDE</TableColumn>
                  <TableColumn key="actions">ACCIONES</TableColumn>
                </TableHeader>
                <TableBody
                  isLoading={isLoading}
                  items={data}
                  loadingContent={
                    <Spinner label="Cargando..." className="mt-20" />
                  }
                  emptyContent={"No hay horarios definidos."}
                >
                  {data &&
                    data.map((schedule: ISchedule, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="capitalize">
                          {schedule.day}
                        </TableCell>
                        <TableCell>{formatDate(schedule.entry_1)}</TableCell>
                        <TableCell>{formatDate(schedule.exit_1)}</TableCell>
                        <TableCell>{formatDate(schedule.entry_2)}</TableCell>
                        <TableCell>{formatDate(schedule.exit_2)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Tooltip content="Editar" showArrow>
                              <Button
                                isIconOnly
                                color="warning"
                                onClick={() => {
                                  onOpen();
                                  setScheduleConfirm({
                                    _id: schedule._id,
                                    day: index.toString() as IDay,
                                    entry_1: schedule.entry_1,
                                    entry_2: schedule.entry_2,
                                    exit_1: schedule.exit_1,
                                    exit_2: schedule.exit_2,
                                  });
                                  setIsEdit(true);
                                  console.log(schedule)
                                }}
                              >
                                <EditIcon className="text-white" />
                              </Button>
                            </Tooltip>
                            <Tooltip content="Eliminar" showArrow>
                              <Button
                                isIconOnly
                                color="danger"
                                onClick={() => {
                                  confirmModal();
                                  setScheduleConfirm(schedule);
                                }}
                              >
                                <DeleteIcon className="text-white" />
                              </Button>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <div className="border border-default-100 rounded-2xl p-4 mt-6 flex justify-center gap-2">
                <Button
                  color="primary"
                  size="lg"
                  startContent={<NewDayIcon />}
                  onPress={onOpen}
                >
                  Agregar nuevo día
                </Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
