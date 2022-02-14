import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'theme'
import { firebase } from '@react-native-firebase/firestore'

const CategoriesList = ({ setActive, active }) => {
  const { t } = useTranslation()
  const { Images } = useTheme()
  const [categories, setCategories] = useState([])

  const getData = () => {
    firebase
      .firestore()
      .collection('Categories')
      .get()
      .then((docs) => {
        let categories = []
        docs.docs.forEach((el) => {
          categories.push({ ...el.data(), id: el.id })
        })
        setCategories(categories)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <FlatList
      ListHeaderComponent={
        <CategoryItem
          item={{ name: 'All' }}
          active={active}
          setActive={setActive}
        />
      }
      contentContainerStyle={styles().list}
      horizontal
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem item={item} active={active} setActive={setActive} />
      )}
    />
  )
}

const CategoryItem = ({ item, active, setActive }) => {
  return (
    <TouchableOpacity
      onPress={() => setActive(item.name)}
      style={styles(item.name === active).item}
    >
      <Text style={styles(item.name === active).itemText}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesList
