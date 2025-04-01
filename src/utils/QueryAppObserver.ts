
function shallowEqualObjects<T extends Record<string, any>>(
    a: T,
    b: T | undefined,
  ): boolean {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
      return false
    }
  
    for (const key in a) {
      if (a[key] !== b[key]) {
        return false
      }
    }
  
    return true
  }

export class QueryAppObserver{
    listener = undefined;
    state = undefined;
    trackedPropKeys = new Set<string>()

    update(newState: any){

        const oldState = this.state
        // console.log( oldState, newState)

        // Only notify and update result if something has changed
        if (shallowEqualObjects(newState, oldState)) {
            console.log("OBSERVER: Not Updating as data not changed")
            return
        }

        this.state = Object.assign({} , newState)


        const shouldNotifyListeners = (): boolean => {
            if (!oldState) {
                console.log("OBSERVER: Previous No data")
              return true
            }
      
            const includedProps = new Set(this.trackedPropKeys)
      
            return Object.keys(this.state).some((key) => {
              const changed = this.state[key] !== oldState[key]
              return changed && includedProps.has(key)
            })
          }

          if(shouldNotifyListeners()){
            this.listener()
          }
    }

    subscribe(listener: any) {
        this.listener = listener
        return () => this.unsubscribe()
    }

    unsubscribe() {
        if(this.listener){
            this.listener = undefined
        }
    }

    trackProperties(data: any) {
        const exportedData = {} as any

        Object.keys(data).forEach((key) => {
            Object.defineProperty(exportedData, key, {
              configurable: false,
              enumerable: true,
              get: () => {
                this.addToTrackedProps(key)
                return data[key]
              },
            })
          })

    
        return exportedData
    }

    addToTrackedProps(key: string) {
        this.trackedPropKeys.add(key)
    }
}
