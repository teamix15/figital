import { WordsService } from '@/services/wordsService'
import { defineStore } from 'pinia'

export const useExerciseStore = defineStore('exercise', () => {
  const uploadWordsExercise = async (file: File, unit: number) => {}

  const downloadWordsExercise = async (unit: string) => {
    try {
      WordsService.downloadWords({ unit })
    } catch (error) {
      console.log(error)
    }
  }

  const uploadGapsExercise = async (file: File, unit: string) => {
  }

  const downloadGapsExercise = async (unit: string) => {
  }

  return {
    uploadWordsExercise,
    downloadWordsExercise,
    uploadGapsExercise,
    downloadGapsExercise,
  }
})
