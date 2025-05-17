import { WordsService } from '@/services/wordsService'
import { GapsService } from '@/services/gapsService'
import { defineStore } from 'pinia'
import { QuizService } from '@/services/quizService'

export const useExerciseStore = defineStore('exercise', () => {
  const uploadWordsExercise = async (file: File, unit: number) => {
    try {
      await WordsService.uploadWords({ unit }, file)
    } catch (error) {
      console.error('Error uploading words:', error)
    }
  }

  const downloadWordsExercise = async (unit: number) => {
    try {
      await WordsService.downloadWords({ unit })
    } catch (error) {
      console.error('Error downloading words:', error)
    }
  }

  const uploadGapsExercise = async (file: File, unit: number) => {
    try {
      await GapsService.uploadGapsFile(unit, file)
    } catch (error) {
      console.error('Error uploading gaps:', error)
    }
  }

  const downloadGapsExercise = async (unit: number) => {
    try {
      await GapsService.downloadGapsFile(unit)
    } catch (error) {
      console.error('Error downloading gaps:', error)
    }
  }

  const uploadQuizExercise = async (file: File, unit: number) => {
    try {
      await QuizService.uploadQuizFile(unit, file)
    } catch (error) {
      console.error('Error uploading quiz:', error)
    }
  }

  const downloadQuizExercise = async (unit: number) => {
    try {
      await QuizService.downloadQuizFile(unit)
    } catch (error) {
      console.error('Error downloading quiz:', error)
    }
  }

  return {
    uploadWordsExercise,
    downloadWordsExercise,
    uploadGapsExercise,
    downloadGapsExercise,
    uploadQuizExercise,
    downloadQuizExercise,
  }
})
