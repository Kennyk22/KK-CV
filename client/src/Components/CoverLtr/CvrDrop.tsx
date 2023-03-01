import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { CoverLetter, WholeState } from '../../Redux/StateTypes'
import { actionDrop } from '../../Redux/Actions'

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CvrDrop({category} : {category: keyof CoverLetter}) {

  const dispatch = useDispatch()

  const state = useSelector((state: WholeState) => state.Cover)
  
  const onClick = (select: string) => {
    dispatch(actionDrop(category, select))
  }

  return (
    <Menu as="div" className="relative inline-block text-left w-[40%]">
      <div>
        <Menu.Button className="inline-flex w-full h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {state[category + 'Select' as keyof CoverLetter] ? state[category + 'Select' as keyof CoverLetter] : category}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            { (state[category] as string[]).map((el: string) => {
            return <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  onClick={()=> onClick(el)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  {el}
                </button>
              )}
            </Menu.Item>
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
